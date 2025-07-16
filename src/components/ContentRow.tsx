import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContentCard from "./ContentCard";

interface Content {
  id: string;
  title: string;
  image: string;
  year?: string;
  rating?: string;
  genre?: string;
}

interface ContentRowProps {
  title: string;
  content: Content[];
  isLarge?: boolean;
}

const ContentRow = ({ title, content, isLarge = false }: ContentRowProps) => {
  const scrollContainer = (direction: 'left' | 'right') => {
    const container = document.getElementById(`scroll-${title.replace(/\s+/g, '-').toLowerCase()}`);
    if (container) {
      const scrollAmount = isLarge ? 400 : 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-foreground px-4 md:px-8">
        {title}
      </h2>
      
      <div className="relative group">
        {/* Left scroll button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 hover:bg-background/90 h-12 w-12"
          onClick={() => scrollContainer('left')}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        {/* Content container */}
        <div
          id={`scroll-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="flex space-x-2 md:space-x-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {content.map((item) => (
            <div
              key={item.id}
              className={`flex-shrink-0 ${
                isLarge ? "w-64 md:w-80" : "w-40 md:w-56"
              }`}
            >
              <ContentCard
                title={item.title}
                image={item.image}
                year={item.year}
                rating={item.rating}
                genre={item.genre}
                isLarge={isLarge}
              />
            </div>
          ))}
        </div>

        {/* Right scroll button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 hover:bg-background/90 h-12 w-12"
          onClick={() => scrollContainer('right')}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default ContentRow;