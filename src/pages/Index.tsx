import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContentRow from "@/components/ContentRow";

// Mock data for content
const mockContent = [
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
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Content Rows */}
      <div className="space-y-8 py-8">
        <ContentRow title="Trending Now" content={mockContent} isLarge />
        <ContentRow title="Popular Movies" content={mockContent} />
        <ContentRow title="Netflix Originals" content={mockContent} />
        <ContentRow title="Action Movies" content={mockContent} />
        <ContentRow title="Comedy Movies" content={mockContent} />
      </div>
    </div>
  );
};

export default Index;
