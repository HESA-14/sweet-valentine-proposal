import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
  size: number;
}

interface HeartBurstProps {
  x: number;
  y: number;
  onComplete: () => void;
}

const HeartBurst = ({ x, y, onComplete }: HeartBurstProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: 0,
      y: 0,
      angle: (i / 8) * 360,
      speed: Math.random() * 40 + 30,
      size: Math.random() * 12 + 8,
    }));
    setParticles(generated);

    const timer = setTimeout(onComplete, 800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
    >
      {particles.map((p) => {
        const rad = (p.angle * Math.PI) / 180;
        const tx = Math.cos(rad) * p.speed;
        const ty = Math.sin(rad) * p.speed;
        return (
          <span
            key={p.id}
            className="absolute"
            style={{
              fontSize: `${p.size}px`,
              animation: "heart-burst 0.8s ease-out forwards",
              transform: `translate(${tx}px, ${ty}px)`,
            }}
          >
            💖
          </span>
        );
      })}
    </div>
  );
};

export default HeartBurst;
