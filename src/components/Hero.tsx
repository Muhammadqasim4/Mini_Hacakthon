import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground/90">AI-Powered Pitch Generation</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Transform Ideas
          </span>
          <br />
          <span className="text-foreground">Into Perfect Pitches</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          Your AI co-founder that turns startup ideas into professional pitches in seconds.
        </p>
        
        <p className="text-lg text-accent/80 mb-12 font-medium" dir="rtl">
          AI analyze your idea and ready pitch
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/create">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all group">
              Generate Your Pitch
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
            Watch Demo
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              30s
            </div>
            <div className="text-muted-foreground">Average pitch generation time</div>
          </div>
          <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              AI
            </div>
            <div className="text-muted-foreground">Powered by advanced AI models</div>
          </div>
          <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              2+
            </div>
            <div className="text-muted-foreground">Languages supported</div>
          </div>
        </div>
      </div>
    </div>
  );
};
