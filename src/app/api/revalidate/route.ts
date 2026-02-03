import { revalidatePath } from 'next/cache';
// revalidateTag available for future tag-based revalidation
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Verify the webhook secret
    const secret = request.headers.get('x-sanity-webhook-secret');
    if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
      return NextResponse.json(
        { message: 'Invalid secret' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { _type, slug } = body;

    // Revalidate based on document type
    switch (_type) {
      case 'page':
        if (slug?.current) {
          revalidatePath(`/${slug.current}`);
        }
        // Also revalidate homepage in case it's affected
        revalidatePath('/');
        break;

      case 'blogPost':
        revalidatePath('/blog');
        if (slug?.current) {
          revalidatePath(`/blog/${slug.current}`);
        }
        break;

      case 'teamMember':
        // Team members might appear on multiple pages
        revalidatePath('/');
        revalidatePath('/about');
        break;

      case 'siteSettings':
      case 'navigation':
      case 'footer':
        // Global settings affect all pages
        revalidatePath('/', 'layout');
        break;

      default:
        // Revalidate everything for unknown types
        revalidatePath('/');
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      type: _type,
    });
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { message: 'Error revalidating', error: String(error) },
      { status: 500 }
    );
  }
}

// Also handle GET requests for manual revalidation
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const secret = searchParams.get('secret');
  const path = searchParams.get('path');

  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json(
      { message: 'Invalid secret' },
      { status: 401 }
    );
  }

  if (path) {
    revalidatePath(path);
    return NextResponse.json({ revalidated: true, path });
  }

  // Revalidate all if no specific path
  revalidatePath('/');
  return NextResponse.json({ revalidated: true, path: '/' });
}
