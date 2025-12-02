export function GlobalStyles() {
  return (
    <style jsx global>{`
      @keyframes slideLogoBg {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(150px);
        }
      }

      .animate-slideBackground {
        animation: slideLogoBg 30s linear infinite;
      }

      body {
        background: linear-gradient(135deg, #030712 0%, #0c1d3b 50%, #1a0f2e 100%);
      }
    `}</style>
  );
}
