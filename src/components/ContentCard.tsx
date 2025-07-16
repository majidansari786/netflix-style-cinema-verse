import { useState } from "react";
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContentCardProps {
  title: string;
  image: string;
  year?: string;
  rating?: string;
  genre?: string;
  isLarge?: boolean;
}

const ContentCard = ({ title, image, year, rating, genre, isLarge = false }: ContentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-300 ${
        isLarge ? "h-64 md:h-80" : "h-32 md:h-48"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative w-full h-full overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Hover content */}
      {isHovered && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end p-4 z-10 animate-fade-in">
          <div className="space-y-2">
            <h3 className="text-foreground font-semibold text-sm md:text-base line-clamp-2">
              {title}
            </h3>
            
            {(year || rating || genre) && (
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                {year && <span>{year}</span>}
                {rating && <span className="px-1 bg-muted rounded text-xs">{rating}</span>}
                {genre && <span>{genre}</span>}
              </div>
            )}

            {/* Action buttons */}
            <div className="flex items-center space-x-2 pt-2">
              <Button variant="play" size="sm" className="h-8 px-3">
                <Play className="h-3 w-3 fill-current" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-foreground/20">
                <Plus className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-foreground/20">
                <ThumbsUp className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-foreground/20">
                <ChevronDown className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentCard;