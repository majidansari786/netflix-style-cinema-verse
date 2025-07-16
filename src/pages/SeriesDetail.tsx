import { useParams, Link } from "react-router-dom";
import { Play, Plus, ThumbsUp, ThumbsDown, Share, Download, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ContentRow from "@/components/ContentRow";

// Extended mock data for series details
const seriesDetails = {
  "1": {
    id: "1",
    title: "Stranger Things",
    year: "2016",
    rating: "TV-14",
    seasons: 4,
    genre: "Sci-Fi, Horror, Drama",
    creator: "The Duffer Brothers",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "David Harbour", "Winona Ryder"],
    synopsis: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&h=1080&fit=crop",
    score: "98% Match",
    features: ["HD", "5.1 Surround Sound", "Audio Description"],
    episodes: [
      { id: 1, title: "Chapter One: The Vanishing of Will Byers", duration: "47m", synopsis: "On his way home from a friend's house, young Will sees something terrifying..." },
      { id: 2, title: "Chapter Two: The Weirdo on Maple Street", duration: "55m", synopsis: "Lucas, Mike and Dustin try to talk to the girl they found in the woods..." },
      { id: 3, title: "Chapter Three: Holly, Jolly", duration: "51m", synopsis: "An increasingly concerned Nancy looks for Barb and finds out what Jonathan's been up to..." },
      { id: 4, title: "Chapter Four: The Body", duration: "50m", synopsis: "Refusing to believe Will is dead, Joyce tries to connect with her son..." },
      { id: 5, title: "Chapter Five: Dig Dug", duration: "52m", synopsis: "Hopper discovers the lab's portal, Joyce and Hopper are taken in..." },
    ]
  },
};

const mockSimilarSeries = [
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
  }
];

const SeriesDetail = () => {
  const { id } = useParams();
  const series = seriesDetails[id as keyof typeof seriesDetails] || {
    id: id || "1",
    title: "Series Title",
    year: "2024",
    rating: "TV-14",
    seasons: 1,
    genre: "Drama",
    creator: "Creator Name",
    cast: ["Actor 1", "Actor 2", "Actor 3", "Actor 4"],
    synopsis: "This is a placeholder synopsis for the series. It describes the plot and main themes of the show in an engaging way.",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&h=1080&fit=crop",
    score: "95% Match",
    features: ["HD", "5.1 Surround Sound", "Audio Description"],
    episodes: [
      { id: 1, title: "Episode 1", duration: "45m", synopsis: "First episode description..." },
      { id: 2, title: "Episode 2", duration: "47m", synopsis: "Second episode description..." },
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={series.image}
            alt={series.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Back Button */}
        <Link 
          to="/series" 
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
                {series.title}
              </h1>

              {/* Metadata */}
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span className="px-2 py-1 bg-netflix-red text-foreground rounded text-xs font-medium">
                  {series.score}
                </span>
                <span>{series.year}</span>
                <span className="px-1 bg-muted rounded">{series.rating}</span>
                <span>{series.seasons} Season{series.seasons > 1 ? 's' : ''}</span>
              </div>

              {/* Synopsis */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                {series.synopsis}
              </p>

              {/* Genre and Creator */}
              <div className="space-y-2 text-sm">
                <p><span className="text-muted-foreground">Genre:</span> <span className="text-foreground">{series.genre}</span></p>
                <p><span className="text-muted-foreground">Creator:</span> <span className="text-foreground">{series.creator}</span></p>
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
        {/* Episodes Section */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-6">Episodes</h3>
          <div className="space-y-4">
            {series.episodes.map((episode) => (
              <div key={episode.id} className="flex gap-4 p-4 bg-card rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                <div className="flex-shrink-0 w-16 h-12 bg-muted rounded flex items-center justify-center text-lg font-bold text-muted-foreground">
                  {episode.id}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">{episode.title}</h4>
                    <span className="text-sm text-muted-foreground">{episode.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{episode.synopsis}</p>
                </div>
                <Button variant="ghost" size="icon" className="flex-shrink-0">
                  <Play className="h-4 w-4 fill-current" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Cast and Info */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Cast</h3>
              <div className="flex flex-wrap gap-2">
                {series.cast.map((actor, index) => (
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
                {series.features.map((feature, index) => (
                  <div key={index} className="text-sm text-foreground">{feature}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Series */}
        <ContentRow title="More Like This" content={mockSimilarSeries} />
      </div>
    </div>
  );
};

export default SeriesDetail;