import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
}

const emojis = ["💕", "💗", "💖", "🌸", "✨", "💝", "🩷", "❤️"];

const FallingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 16 + 12,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 10,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute opacity-40"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animation: `fall ${heart.duration}s linear ${heart.delay}s infinite`,
            top: "-5vh",
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
};

export default FallingHearts;
