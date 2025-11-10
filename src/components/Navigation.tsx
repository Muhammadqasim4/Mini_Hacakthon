import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-lg bg-background/80">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-primary">
            <Sparkles className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            PitchCraft
          </span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/create">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Create Pitch
            </Button>
          </Link>
          <Button className="bg-gradient-primary hover:shadow-glow transition-all">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
