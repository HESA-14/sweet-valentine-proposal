import { useEffect, useState } from "react";
import couplePhoto1 from "@/assets/couple-photo-1.png";
import couplePhoto2 from "@/assets/couple-photo-2.png";
import couplePhoto3 from "@/assets/couple-photo-3.png";

const photos = [
  { src: couplePhoto1, caption: "Our story began ✨" },
  { src: couplePhoto2, caption: "Every moment with you 💕" },
  { src: couplePhoto3, caption: "Forever starts here 💞" },
];

const PhotoSection = () => {
  const [visiblePhotos, setVisiblePhotos] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    photos.forEach((_, i) => {
      setTimeout(() => {
        setVisiblePhotos((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 400 + i * 500);
    });
  }, []);

  return (
    <section className="py-20 px-4">
      <h2 className="text-valentine-script text-4xl sm:text-5xl text-center mb-4 font-bold">
        Our Memories 📸
      </h2>
      <p className="text-center text-muted-foreground font-body text-lg mb-12">
        Every moment with you is a treasure 💝
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
        {photos.map((photo, i) => (
          <div
            key={i}
            className={`transition-all duration-700 ease-out ${
              visiblePhotos[i]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: `${i * 200}ms` }}
          >
            {/* Polaroid frame */}
            <div
              className="valentine-card p-3 pb-6 max-w-[280px] mx-auto
                transform hover:scale-105 hover:-rotate-1 transition-all duration-500
                animate-float"
              style={{
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${5 + i}s`,
              }}
            >
              <div className="overflow-hidden rounded-md aspect-[4/5]">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-center mt-3 text-valentine-script text-lg text-foreground">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoSection;
