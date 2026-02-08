import { useState, useCallback } from "react";
import teddyBear from "@/assets/teddy-bear.png";
import rose from "@/assets/rose.png";
import chocolate from "@/assets/chocolate.png";
import gift from "@/assets/gift.png";
import loveStory from "@/assets/love-story.png";
import HeartBurst from "./HeartBurst";

interface GiftCard {
  image: string;
  emoji: string;
  caption: string;
  delay: number;
}

const giftCards: GiftCard[] = [
  {
    image: teddyBear,
    emoji: "🐻",
    caption: "We are meant to be together 🤍",
    delay: 0,
  },
  {
    image: rose,
    emoji: "🌹",
    caption: "You + Me = Forever",
    delay: 0.2,
  },
  {
    image: chocolate,
    emoji: "🍫",
    caption: "Life is sweeter with you",
    delay: 0.4,
  },
  {
    image: gift,
    emoji: "🎁",
    caption: "My favorite gift is YOU",
    delay: 0.6,
  },
  {
    image: loveStory,
    emoji: "💕",
    caption: "Every love story is beautiful, but ours is my favorite",
    delay: 0.8,
  },
];

interface BurstState {
  id: number;
  x: number;
  y: number;
}

const GiftCardsSection = () => {
  const [bursts, setBursts] = useState<BurstState[]>([]);

  const handleCardClick = useCallback((e: React.MouseEvent) => {
    const burst: BurstState = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setBursts((prev) => [...prev, burst]);
  }, []);

  const removeBurst = useCallback((id: number) => {
    setBursts((prev) => prev.filter((b) => b.id !== id));
  }, []);

  return (
    <section className="py-20 px-4 valentine-gradient">
      <h2 className="text-valentine-script text-4xl sm:text-5xl text-center mb-4 font-bold">
        Love Gifts 🎀
      </h2>
      <p className="text-center text-muted-foreground font-body text-lg mb-12">
        Each one reminds me of us 💗
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {giftCards.map((card, i) => (
          <div
            key={i}
            onClick={handleCardClick}
            className="valentine-card p-6 cursor-pointer
              group transform transition-all duration-500 ease-out
              hover:-translate-y-3 hover:shadow-[var(--shadow-glow)]
              animate-slide-up"
            style={{
              animationDelay: `${card.delay}s`,
              animationFillMode: "both",
            }}
          >
            {/* Card image */}
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={card.image}
                alt={card.caption}
                className="w-full h-48 object-cover rounded-lg
                  transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Sparkle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-valentine-rose/10 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

              {/* Floating emoji */}
              <span className="absolute top-3 right-3 text-2xl
                opacity-0 group-hover:opacity-100
                transform translate-y-2 group-hover:translate-y-0
                transition-all duration-300">
                {card.emoji}
              </span>
            </div>

            {/* Caption */}
            <p className="text-valentine-script text-xl text-center text-foreground
              group-hover:text-valentine-deep-rose transition-colors duration-300">
              {card.caption}
            </p>

            {/* Decorative hearts on hover */}
            <div className="flex justify-center mt-3 gap-1
              opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {["💖", "💕", "💗"].map((heart, j) => (
                <span
                  key={j}
                  className="text-sm animate-bounce-gentle"
                  style={{ animationDelay: `${j * 0.2}s` }}
                >
                  {heart}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Heart burst effects */}
      {bursts.map((burst) => (
        <HeartBurst
          key={burst.id}
          x={burst.x}
          y={burst.y}
          onComplete={() => removeBurst(burst.id)}
        />
      ))}
    </section>
  );
};

export default GiftCardsSection;
