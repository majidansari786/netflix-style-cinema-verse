import Navbar from "@/components/Navbar";
import ContentCard from "@/components/ContentCard";

// Mock movie data
const movies = [
  {
    id: "1",
    title: "The Dark Knight",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop",
    year: "2008",
    rating: "PG-13",
    genre: "Action"
  },
  {
    id: "2", 
    title: "Inception",
    image: "https://images.unsplash.com/photo-1489599808221-c0c37a2c4cce?w=300&h=450&fit=crop",
    year: "2010",
    rating: "PG-13", 
    genre: "Sci-Fi"
  },
  {
    id: "3",
    title: "The Matrix",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop",
    year: "1999",
    rating: "R",
    genre: "Action"
  },
  {
    id: "4",
    title: "Pulp Fiction",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop",
    year: "1994",
    rating: "R",
    genre: "Crime"
  },
  {
    id: "5",
    title: "The Godfather",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
    year: "1972",
    rating: "R",
    genre: "Drama"
  },
  {
    id: "6",
    title: "Avatar",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop",
    year: "2009",
    rating: "PG-13",
    genre: "Sci-Fi"
  },
  {
    id: "7",
    title: "Interstellar",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=450&fit=crop",
    year: "2014",
    rating: "PG-13",
    genre: "Sci-Fi"
  },
  {
    id: "8",
    title: "The Shawshank Redemption",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop",
    year: "1994",
    rating: "R",
    genre: "Drama"
  },
  {
    id: "9",
    title: "Forrest Gump",
    image: "https://images.unsplash.com/photo-1489599808221-c0c37a2c4cce?w=300&h=450&fit=crop",
    year: "1994",
    rating: "PG-13",
    genre: "Drama"
  },
  {
    id: "10",
    title: "The Lion King",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop",
    year: "1994",
    rating: "G",
    genre: "Animation"
  },
  {
    id: "11",
    title: "Titanic",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
    year: "1997",
    rating: "PG-13",
    genre: "Romance"
  },
  {
    id: "12",
    title: "Jurassic Park",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop",
    year: "1993",
    rating: "PG-13",
    genre: "Adventure"
  }
];

const Movies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-8">
        {/* Page Header */}
        <div className="container mx-auto px-4 md:px-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Movies</h1>
          <p className="text-muted-foreground">Explore our vast collection of movies</p>
        </div>

        {/* Movies Grid */}
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {movies.map((movie) => (
              <div key={movie.id} className="aspect-[2/3]">
                <ContentCard
                  title={movie.title}
                  image={movie.image}
                  year={movie.year}
                  rating={movie.rating}
                  genre={movie.genre}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;