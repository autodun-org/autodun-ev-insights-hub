import { useEffect, useState } from "react";
import heroFrame1 from "@/assets/hero-frame-1.jpg";
import heroFrame2 from "@/assets/hero-frame-2.jpg";
import heroFrame3 from "@/assets/hero-frame-3.jpg";
import heroFrame4 from "@/assets/hero-frame-4.jpg";
import heroFrame5 from "@/assets/hero-frame-5.jpg";
import heroPoster from "@/assets/hero-animation-poster.jpg";

const HeroAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const frames = [
    heroFrame1,
    heroFrame2,
    heroFrame3,
    heroFrame4,
    heroFrame5,
  ];

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const promises = frames.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to preload animation frames", error);
      }
    };

    preloadImages();
  }, []);

  // Cycle through frames
  useEffect(() => {
    if (!isLoaded) return;

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 3000); // 3 seconds per frame

    return () => clearInterval(interval);
  }, [isLoaded, frames.length]);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
      {/* Fallback poster image */}
      {!isLoaded && (
        <img
          src={heroPoster}
          alt="Autodun EV Charging Platform Demo"
          className="h-full w-full object-cover"
        />
      )}

      {/* Animated frames */}
      {isLoaded && (
        <div className="relative h-full w-full">
          {frames.map((frame, index) => (
            <img
              key={index}
              src={frame}
              alt={`Autodun demo step ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                currentFrame === index ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
            />
          ))}
        </div>
      )}

      {/* Optional: Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background/80 to-transparent">
          <div className="rounded-lg bg-background/95 px-6 py-4 shadow-lg backdrop-blur">
            <p className="text-sm font-medium text-muted-foreground">
              Loading demo...
            </p>
          </div>
        </div>
      )}

      {/* Step indicators */}
      {isLoaded && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {frames.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentFrame(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentFrame === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/50 hover:bg-muted-foreground"
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroAnimation;
