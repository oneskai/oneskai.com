import { groq } from 'next-sanity';

// Get homepage
export const homepageQuery = groq`
  *[_type == "page" && isHomepage == true][0] {
    _id,
    title,
    seo,
    sections[] {
      _key,
      _type,
      ...
    }
  }
`;

// Get page by slug
export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    seo,
    sections[] {
      _key,
      _type,
      ...
    }
  }
`;

// Get all page slugs for static generation
export const allPageSlugsQuery = groq`
  *[_type == "page" && defined(slug.current) && isHomepage != true].slug.current
`;

// Get blog posts for blog grid section
export const blogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    slug,
    category,
    publishedAt,
    readTime,
    featuredImage,
    excerpt
  }
`;

// Get blog post by slug
export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    publishedAt,
    readTime,
    featuredImage,
    excerpt,
    content,
    seo
  }
`;

// Get all blog post slugs for static generation
export const allBlogSlugsQuery = groq`
  *[_type == "blogPost" && defined(slug.current)].slug.current
`;

// Get team members
export const teamMembersQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    image,
    bio
  }
`;

// Get team members by IDs (for teamSection with specific members)
export const teamMembersByIdsQuery = groq`
  *[_type == "teamMember" && _id in $ids] | order(order asc) {
    _id,
    name,
    role,
    image,
    bio
  }
`;
