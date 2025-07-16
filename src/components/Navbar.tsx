import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md" : "bg-gradient-to-b from-background/80 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-netflix-red text-2xl font-bold tracking-wide">
              NETFLIX
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  isActive("/") ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                to="/movies"
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  isActive("/movies") ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Movies
              </Link>
              <Link
                to="/series"
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  isActive("/series") ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                TV Shows
              </Link>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-accent/50">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent/50">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent/50">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;