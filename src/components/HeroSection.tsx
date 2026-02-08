import { useState, useCallback, useRef } from "react";

interface HeroSectionProps {
  onYesClick: () => void;
}

const HeroSection = ({ onYesClick }: HeroSectionProps) => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noMessage, setNoMessage] = useState("");
  const [noClickCount, setNoClickCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = useCallback(() => {
    const maxX = 200;
    const maxY = 150;
    const newX = (Math.random() - 0.5) * maxX * 2;
    const newY = (Math.random() - 0.5) * maxY * 2;
    setNoPosition({ x: newX, y: newY });
  }, []);

  const handleNoClick = () => {
    setNoClickCount((prev) => prev + 1);
    if (noClickCount >= 2) {
      setNoMessage("Sorry, that is an invalid option for this life 💖");
    } else {
      moveNoButton();
    }
  };

  const handleNoHover = () => {
    if (noClickCount < 3) {
      moveNoButton();
    }
  };

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-4"
    >
      {/* Decorative floating emojis */}
      <span className="absolute top-[10%] left-[10%] text-4xl animate-float opacity-60">🌹</span>
      <span className="absolute top-[15%] right-[12%] text-3xl animate-float-slow opacity-50">🍫</span>
      <span className="absolute bottom-[20%] left-[15%] text-3xl animate-bounce-gentle opacity-50">🐻</span>
      <span className="absolute bottom-[15%] right-[10%] text-4xl animate-wiggle opacity-50">🎁</span>
      <span className="absolute top-[30%] right-[25%] text-2xl animate-pulse-soft opacity-40">✨</span>
      <span className="absolute top-[25%] left-[25%] text-2xl animate-pulse-soft opacity-40" style={{ animationDelay: "1s" }}>💕</span>

      {/* Main question */}
      <div className="text-center mb-12 animate-slide-up">
        <h1 className="text-valentine-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Will you be my
          <br />
          <span className="inline-block animate-heartbeat text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            Valentine?
          </span>
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl font-body mt-4">
          I have a very important question for you... 💌
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-6 relative" style={{ minHeight: "120px" }}>
        <button
          onClick={onYesClick}
          className="px-10 py-4 rounded-full text-xl font-bold font-body
            bg-primary text-primary-foreground
            shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-card)]
            transform hover:scale-110 active:scale-95
            transition-all duration-300 ease-out
            animate-bounce-gentle z-10"
        >
          💕 YES
        </button>

        <div className="relative" style={{ minWidth: "140px", minHeight: "60px" }}>
          <button
            onClick={handleNoClick}
            onMouseEnter={handleNoHover}
            className="px-8 py-3 rounded-full text-lg font-body font-semibold
              bg-secondary text-secondary-foreground
              border border-border
              shadow-[var(--shadow-soft)]
              transition-all duration-300 ease-out
              hover:bg-muted absolute"
            style={{
              transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
              transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            😅 NO
          </button>
        </div>
      </div>

      {/* Invalid option message */}
      {noMessage && (
        <p className="mt-8 text-valentine-script text-xl sm:text-2xl text-valentine-rose animate-slide-up font-semibold">
          {noMessage}
        </p>
      )}
    </section>
  );
};

export default HeroSection;
