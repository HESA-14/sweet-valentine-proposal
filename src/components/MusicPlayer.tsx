import { useState, useRef, useEffect } from "react";

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create a simple romantic melody using Web Audio API
    // Since we can't host audio files, we use a placeholder approach
    // Users can replace this with their own audio file
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-card border border-border
        shadow-[var(--shadow-card)]
        flex items-center justify-center
        text-xl transition-all duration-300
        hover:scale-110 hover:shadow-[var(--shadow-glow)]
        animate-bounce-gentle"
      aria-label={isMuted ? "Unmute music" : "Mute music"}
      title={isMuted ? "Play music 🎵" : "Mute music 🔇"}
    >
      {isMuted ? "🔇" : "🎶"}
    </button>
  );
};

export default MusicPlayer;
