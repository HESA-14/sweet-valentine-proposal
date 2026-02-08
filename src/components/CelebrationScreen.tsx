import { useEffect, useState } from "react";

const CelebrationScreen = () => {
  const [visible, setVisible] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Stagger the animations
    const t1 = setTimeout(() => setVisible(true), 100);
    const t2 = setTimeout(() => setShowText(true), 800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Celebration emojis */}
      {["🎉", "💕", "🥳", "💖", "✨", "🎊", "💗", "🩷"].map((emoji, i) => (
        <span
          key={i}
          className="absolute text-3xl animate-float opacity-50"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${3 + i * 0.5}s`,
          }}
        >
          {emoji}
        </span>
      ))}

      {/* Big animated heart */}
      <div
        className={`transition-all duration-1000 ease-out ${
          visible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="text-9xl sm:text-[12rem] animate-heartbeat heart-glow select-none">
          ❤️
        </div>
      </div>

      {/* YAYYYY text */}
      {showText && (
        <div className="text-center mt-8 animate-slide-up">
          <h2 className="text-valentine-script text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
            YAYYYY 💕
          </h2>
          <p className="text-valentine-script text-2xl sm:text-3xl text-valentine-rose">
            I knew it!
          </p>
          <p className="text-muted-foreground text-lg mt-4 font-body">
            You just made me the happiest person in the world 🥹
          </p>
        </div>
      )}
    </section>
  );
};

export default CelebrationScreen;
