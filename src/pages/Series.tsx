import Navbar from "@/components/Navbar";
import ContentCard from "@/components/ContentCard";

// Mock series data
const series = [
  {
    id: "1",
    title: "Stranger Things",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
    year: "2016",
    rating: "TV-14",
    genre: "Sci-Fi"
  },
  {
    id: "2", 
    title: "The Crown",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop",
    year: "2016",
    rating: "TV-MA", 
    genre: "Drama"
  },
  {
    id: "3",
    title: "Breaking Bad",
    image: "https://images.unsplash.com/photo-1489599808221-c0c37a2c4cce?w=300&h=450&fit=crop",
    year: "2008",
    rating: "TV-MA",
    genre: "Crime"
  },
  {
    id: "4",
    title: "The Office",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop",
    year: "2005",
    rating: "TV-14",
    genre: "Comedy"
  },
  {
    id: "5",
    title: "Game of Thrones",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop",
    year: "2011",
    rating: "TV-MA",
    genre: "Fantasy"
  },
  {
    id: "6",
    title: "The Witcher",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop",
    year: "2019",
    rating: "TV-MA",
    genre: "Fantasy"
  },
  {
    id: "7",
    title: "House of Cards",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
    year: "2013",
    rating: "TV-MA",
    genre: "Drama"
  },
  {
    id: "8",
    title: "Narcos",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop",
    year: "2015",
    rating: "TV-MA",
    genre: "Crime"
  },
  {
    id: "9",
    title: "Orange Is the New Black",
    image: "https://images.unsplash.com/photo-1489599808221-c0c37a2c4cce?w=300&h=450&fit=crop",
    year: "2013",
    rating: "TV-MA",
    genre: "Drama"
  },
  {
    id: "10",
    title: "Money Heist",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop",
    year: "2017",
    rating: "TV-MA",
    genre: "Crime"
  },
  {
    id: "11",
    title: "The Queen's Gambit",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop",
    year: "2020",
    rating: "TV-MA",
    genre: "Drama"
  },
  {
    id: "12",
    title: "Squid Game",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop",
    year: "2021",
    rating: "TV-MA",
    genre: "Thriller"
  }
];

const Series = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-8">
        {/* Page Header */}
        <div className="container mx-auto px-4 md:px-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">TV Shows</h1>
          <p className="text-muted-foreground">Discover your next binge-worthy series</p>
        </div>

        {/* Series Grid */}
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {series.map((show) => (
              <div key={show.id} className="aspect-[2/3]">
                <ContentCard
                  title={show.title}
                  image={show.image}
                  year={show.year}
                  rating={show.rating}
                  genre={show.genre}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Series;