import { useState } from "react";
import FallingHearts from "@/components/FallingHearts";
import HeroSection from "@/components/HeroSection";
import CelebrationScreen from "@/components/CelebrationScreen";
import PhotoSection from "@/components/PhotoSection";
import GiftCardsSection from "@/components/GiftCardsSection";
import MusicPlayer from "@/components/MusicPlayer";
import Footer from "@/components/Footer";

const Index = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="min-h-screen valentine-gradient relative overflow-x-hidden">
      {/* Falling hearts background */}
      <FallingHearts />

      {/* Music toggle */}
      <MusicPlayer />

      {!accepted ? (
        /* Hero section with the proposal question */
        <HeroSection onYesClick={() => setAccepted(true)} />
      ) : (
        /* After clicking YES */
        <main>
          {/* Celebration with big heart */}
          <CelebrationScreen />

          {/* Photo memories section */}
          <PhotoSection />

          {/* Love gift cards section */}
          <GiftCardsSection />

          {/* Footer */}
          <Footer />
        </main>
      )}
    </div>
  );
};

export default Index;
