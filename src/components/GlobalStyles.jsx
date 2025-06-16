import React from 'react';

const GlobalStyles = () => {
  return (
    <style jsx>{`
      .circuit-pattern {
        background-image: 
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px);
        background-size: 30px 30px;
      }
      .diagonal-lines {
        background-image: repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          rgba(59, 130, 246, 0.05) 10px,
          rgba(59, 130, 246, 0.05) 20px
        );
      }
      .electric-glow {
        box-shadow: 
          0 0 20px rgba(59, 130, 246, 0.3),
          inset 0 0 20px rgba(59, 130, 246, 0.1);
      }
      .power-line {
        background: linear-gradient(to right, transparent 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%);
        height: 2px;
        animation: power-flow 3s linear infinite;
      }
      @keyframes power-flow {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      .scroll-indicator {
        position: fixed;
        top: 64px;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(to right, #3b82f6 var(--scroll-progress, 0%), transparent var(--scroll-progress, 0%));
        z-index: 40;
      }
    `}</style>
  );
};

export default GlobalStyles;