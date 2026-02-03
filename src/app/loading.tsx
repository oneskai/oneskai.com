export default function Loading() {
  return (
    <div className="loading-page">
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <p className="loading-text">Loading...</p>
      </div>

      <style>{`
        .loading-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-white, #ffffff);
        }
        .loading-container {
          text-align: center;
        }
        .loading-spinner {
          position: relative;
          width: 60px;
          height: 60px;
          margin: 0 auto 24px;
        }
        .spinner-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 3px solid transparent;
          border-top-color: var(--primary-green, #052e26);
          border-radius: 50%;
          animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        }
        .spinner-ring:nth-child(1) {
          animation-delay: -0.45s;
        }
        .spinner-ring:nth-child(2) {
          animation-delay: -0.3s;
          width: 80%;
          height: 80%;
          top: 10%;
          left: 10%;
          border-top-color: var(--accent-purple, #3d0da8);
        }
        .spinner-ring:nth-child(3) {
          animation-delay: -0.15s;
          width: 60%;
          height: 60%;
          top: 20%;
          left: 20%;
          border-top-color: var(--accent-yellow, #ffc700);
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .loading-text {
          font-size: 14px;
          color: var(--text-gray, #555);
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
