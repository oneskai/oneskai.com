import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-code">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-description">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="not-found-actions">
          <Link href="/" className="not-found-btn-primary">
            Go Home
          </Link>
          <Link href="/contact" className="not-found-btn-secondary">
            Contact Us
          </Link>
        </div>
        <div className="not-found-links">
          <p>Popular pages:</p>
          <div className="not-found-link-grid">
            <Link href="/services">Services</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/about">About Us</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
      </div>

      <style>{`
        .not-found-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          background: var(--bg-cream, #f9f9f7);
        }
        .not-found-container {
          text-align: center;
          max-width: 500px;
        }
        .not-found-code {
          font-size: 120px;
          font-weight: 900;
          color: var(--primary-green, #052e26);
          line-height: 1;
          margin-bottom: 16px;
          opacity: 0.1;
        }
        .not-found-title {
          font-size: 32px;
          font-weight: 800;
          color: var(--text-dark, #1a1a1a);
          margin-bottom: 16px;
          margin-top: -40px;
        }
        .not-found-description {
          font-size: 16px;
          color: var(--text-gray, #555);
          margin-bottom: 32px;
          line-height: 1.6;
        }
        .not-found-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }
        .not-found-btn-primary {
          background: var(--primary-green, #052e26);
          color: var(--accent-yellow, #ffc700);
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .not-found-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(5, 46, 38, 0.2);
        }
        .not-found-btn-secondary {
          background: transparent;
          color: var(--text-dark, #1a1a1a);
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          border: 2px solid var(--border-color, #eaeaea);
          transition: all 0.3s ease;
        }
        .not-found-btn-secondary:hover {
          border-color: var(--primary-green, #052e26);
          color: var(--primary-green, #052e26);
        }
        .not-found-links {
          border-top: 1px solid var(--border-color, #eaeaea);
          padding-top: 32px;
        }
        .not-found-links p {
          font-size: 14px;
          color: var(--text-gray, #555);
          margin-bottom: 16px;
        }
        .not-found-link-grid {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .not-found-link-grid a {
          font-size: 14px;
          font-weight: 600;
          color: var(--primary-green, #052e26);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .not-found-link-grid a:hover {
          color: var(--accent-purple, #3d0da8);
        }
      `}</style>
    </div>
  );
}
