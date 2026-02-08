const Footer = () => {
  return (
    <footer className="py-12 text-center valentine-gradient">
      <p className="text-valentine-script text-2xl sm:text-3xl text-foreground mb-2">
        Made with all my love 💕
      </p>
      <p className="text-muted-foreground font-body text-sm">
        Happy Valentine&apos;s Day 🌹
      </p>
      <div className="mt-4 flex justify-center gap-2 text-2xl">
        <span className="animate-wiggle">💕</span>
        <span className="animate-bounce-gentle" style={{ animationDelay: "0.3s" }}>🌹</span>
        <span className="animate-float" style={{ animationDelay: "0.6s" }}>🍫</span>
        <span className="animate-wiggle" style={{ animationDelay: "0.9s" }}>🐻</span>
        <span className="animate-bounce-gentle" style={{ animationDelay: "1.2s" }}>💖</span>
      </div>
    </footer>
  );
};

export default Footer;
