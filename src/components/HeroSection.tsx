import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Featured Content"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-lg space-y-6">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Stranger Things
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              When a young boy vanishes, a small town uncovers a mystery involving secret experiments, 
              terrifying supernatural forces, and one strange little girl.
            </p>

            {/* Metadata */}
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="px-2 py-1 bg-netflix-red text-foreground rounded text-xs font-medium">
                #1 in TV Shows Today
              </span>
              <span>2024</span>
              <span className="px-1 bg-muted rounded">TV-14</span>
              <span>4 Seasons</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 pt-4">
              <Button variant="play" size="lg" className="text-lg px-8">
                <Play className="h-5 w-5 fill-current mr-2" />
                Play
              </Button>
              <Button variant="hero" size="lg" className="text-lg px-8">
                <Info className="h-5 w-5 mr-2" />
                More Info
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default HeroSection;