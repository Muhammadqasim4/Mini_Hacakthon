import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Sparkles, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function Create() {
  const [ideaName, setIdeaName] = useState("");
  const [ideaDescription, setIdeaDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!ideaName.trim() || !ideaDescription.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in both your startup name and description",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate API call for now
    setTimeout(() => {
      const mockPitch = {
        name: ideaName,
        tagline: "Innovation Meets Excellence",
        elevatorPitch: "A revolutionary platform that transforms the way people interact with technology.",
        problem: "Current solutions are complex and difficult to use for everyday users.",
        solution: "We provide an intuitive, AI-powered interface that makes technology accessible to everyone.",
        targetAudience: "Tech-savvy millennials and Gen-Z users aged 18-35 who value simplicity and innovation.",
        landingPageCopy: "Welcome to the future of seamless interaction. Our platform combines cutting-edge AI with elegant design to create experiences that delight users and drive results."
      };

      localStorage.setItem('currentPitch', JSON.stringify(mockPitch));
      setIsGenerating(false);
      navigate('/pitch');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Create Your Pitch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Share your startup idea and let AI craft the perfect pitch
            </p>
            <p className="text-accent/70" dir="rtl">
              Apna idea share karein aur AI perfect pitch tayyar karega
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-card">
            <div className="space-y-6">
              <div>
                <Label htmlFor="ideaName" className="text-lg mb-2 block">
                  Startup Name
                  <span className="text-sm text-muted-foreground ml-2">(Optional - AI can suggest one)</span>
                </Label>
                <Input
                  id="ideaName"
                  placeholder="e.g., MentorMate, EduConnect, HealthHub..."
                  value={ideaName}
                  onChange={(e) => setIdeaName(e.target.value)}
                  className="bg-background/50 border-border/50 text-lg h-12"
                />
              </div>

              <div>
                <Label htmlFor="ideaDescription" className="text-lg mb-2 block">
                  Describe Your Startup Idea
                </Label>
                <Textarea
                  id="ideaDescription"
                  placeholder="Tell us about your startup idea... What problem does it solve? Who is it for? What makes it unique?"
                  value={ideaDescription}
                  onChange={(e) => setIdeaDescription(e.target.value)}
                  className="bg-background/50 border-border/50 min-h-[200px] text-base"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Example: "An app that connects students with industry mentors for personalized career guidance"
                </p>
              </div>

              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-gradient-primary hover:shadow-glow transition-all h-14 text-lg"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Generating Your Pitch...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate Pitch with AI
                  </>
                )}
              </Button>

              {isGenerating && (
                <div className="text-center space-y-2 animate-pulse">
                  <p className="text-sm text-muted-foreground">
                    AI is analyzing your idea...
                  </p>
                  <p className="text-sm text-accent/70" dir="rtl">
                    AI aapka idea samajh raha hai...
                  </p>
                </div>
              )}

              <div className="pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground text-center">
                  <span className="text-accent">Note:</span> AI sirf madad ke liye hai, final faisla aapka apna hai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
