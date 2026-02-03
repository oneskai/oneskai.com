'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-icon">
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h1 className="error-title">Something went wrong</h1>
        <p className="error-description">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        {error.digest && (
          <p className="error-digest">Error ID: {error.digest}</p>
        )}
        <div className="error-actions">
          <button onClick={reset} className="error-btn-primary">
            Try Again
          </button>
          <Link href="/" className="error-btn-secondary">
            Go Home
          </Link>
        </div>
      </div>

      <style jsx>{`
        .error-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          background: var(--bg-cream, #f9f9f7);
        }
        .error-container {
          text-align: center;
          max-width: 500px;
        }
        .error-icon {
          color: var(--accent-purple, #3d0da8);
          margin-bottom: 24px;
        }
        .error-title {
          font-size: 32px;
          font-weight: 800;
          color: var(--text-dark, #1a1a1a);
          margin-bottom: 16px;
        }
        .error-description {
          font-size: 16px;
          color: var(--text-gray, #555);
          margin-bottom: 12px;
          line-height: 1.6;
        }
        .error-digest {
          font-size: 12px;
          color: var(--text-gray, #555);
          opacity: 0.7;
          margin-bottom: 32px;
          font-family: monospace;
        }
        .error-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .error-btn-primary {
          background: var(--primary-green, #052e26);
          color: var(--accent-yellow, #ffc700);
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .error-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(5, 46, 38, 0.2);
        }
        .error-btn-secondary {
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
        .error-btn-secondary:hover {
          border-color: var(--primary-green, #052e26);
          color: var(--primary-green, #052e26);
        }
      `}</style>
    </div>
  );
}
