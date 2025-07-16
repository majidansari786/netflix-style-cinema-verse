import { useParams, Link } from "react-router-dom";
import { Play, Plus, ThumbsUp, ThumbsDown, Share, Download, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ContentRow from "@/components/ContentRow";

// Extended mock data for movie details
const movieDetails = {
  "1": {
    id: "1",
    title: "The Dark Knight",
    year: "2008",
    rating: "PG-13",
    duration: "2h 32m",
    genre: "Action, Crime, Drama",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
    synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&h=1080&fit=crop",
    score: "94% Match",
    features: ["HD", "5.1 Surround Sound", "Audio Description"]
  },
  // Add default for other IDs
};

const mockSimilarMovies = [
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
  }
];

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movieDetails[id as keyof typeof movieDetails] || {
    id: id || "1",
    title: "Movie Title",
    year: "2024",
    rating: "PG-13",
    duration: "2h 00m",
    genre: "Action, Drama",
    director: "Director Name",
    cast: ["Actor 1", "Actor 2", "Actor 3", "Actor 4"],
    synopsis: "This is a placeholder synopsis for the movie. It describes the plot and main themes of the film in an engaging way.",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&h=1080&fit=crop",
    score: "95% Match",
    features: ["HD", "5.1 Surround Sound", "Audio Description"]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Back Button */}
        <Link 
          to="/movies" 
          className="absolute top-20 left-4 md:left-8 z-20 p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-all"
        >
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </Link>

        {/* Content */}
        <div className="relative z-10 flex items-center h-full">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl space-y-6">
              {/* Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                {movie.title}
              </h1>

              {/* Metadata */}
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span className="px-2 py-1 bg-netflix-red text-foreground rounded text-xs font-medium">
                  {movie.score}
                </span>
                <span>{movie.year}</span>
                <span className="px-1 bg-muted rounded">{movie.rating}</span>
                <span>{movie.duration}</span>
              </div>

              {/* Synopsis */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                {movie.synopsis}
              </p>

              {/* Genre and Director */}
              <div className="space-y-2 text-sm">
                <p><span className="text-muted-foreground">Genre:</span> <span className="text-foreground">{movie.genre}</span></p>
                <p><span className="text-muted-foreground">Director:</span> <span className="text-foreground">{movie.director}</span></p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4 pt-4">
                <Button variant="play" size="lg" className="text-lg px-8">
                  <Play className="h-5 w-5 fill-current mr-2" />
                  Play
                </Button>
                <Button variant="hero" size="lg" className="text-lg px-8">
                  <Plus className="h-5 w-5 mr-2" />
                  My List
                </Button>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-background/20 hover:bg-background/40">
                    <ThumbsUp className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-background/20 hover:bg-background/40">
                    <ThumbsDown className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-background/20 hover:bg-background/40">
                    <Share className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-background/20 hover:bg-background/40">
                    <Download className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Details Section */}
      <div className="container mx-auto px-4 md:px-8 py-8 space-y-8">
        {/* Cast and Info */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Cast</h3>
              <div className="flex flex-wrap gap-2">
                {movie.cast.map((actor, index) => (
                  <span key={index} className="px-3 py-1 bg-accent rounded-full text-sm text-accent-foreground">
                    {actor}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Features</h4>
              <div className="space-y-1">
                {movie.features.map((feature, index) => (
                  <div key={index} className="text-sm text-foreground">{feature}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Movies */}
        <ContentRow title="More Like This" content={mockSimilarMovies} />
      </div>
    </div>
  );
};

export default MovieDetail;