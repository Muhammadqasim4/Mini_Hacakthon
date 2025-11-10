import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit2, Check, RefreshCw, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface PitchData {
  name: string;
  tagline: string;
  elevatorPitch: string;
  problem: string;
  solution: string;
  targetAudience: string;
  landingPageCopy: string;
}

export default function Pitch() {
  const [pitch, setPitch] = useState<PitchData | null>(null);
  const [editingField, setEditingField] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const storedPitch = localStorage.getItem('currentPitch');
    if (storedPitch) {
      setPitch(JSON.parse(storedPitch));
    } else {
      navigate('/create');
    }
  }, [navigate]);

  const handleEdit = (field: string) => {
    setEditingField(field);
  };

  const handleSave = (field: string) => {
    setEditingField(null);
    if (pitch) {
      localStorage.setItem('currentPitch', JSON.stringify(pitch));
      toast({
        title: "Saved",
        description: "Your changes have been saved"
      });
    }
  };

  const handleRegenerate = () => {
    toast({
      title: "Coming Soon",
      description: "Regeneration will be available after connecting AI backend"
    });
  };

  const handleExport = () => {
    toast({
      title: "Coming Soon",
      description: "Export to PDF will be available soon"
    });
  };

  if (!pitch) return null;

  const PitchSection = ({ 
    label, 
    field, 
    value, 
    multiline = false 
  }: { 
    label: string; 
    field: keyof PitchData; 
    value: string; 
    multiline?: boolean;
  }) => {
    const isEditing = editingField === field;

    return (
      <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all">
        <div className="flex items-center justify-between mb-3">
          <Label className="text-lg font-semibold text-foreground">{label}</Label>
          {!isEditing ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleEdit(field)}
              className="text-primary hover:text-primary/80"
            >
              <Edit2 className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleSave(field)}
              className="text-accent hover:text-accent/80"
            >
              <Check className="w-4 h-4" />
            </Button>
          )}
        </div>
        
        {isEditing ? (
          multiline ? (
            <Textarea
              value={value}
              onChange={(e) => setPitch({ ...pitch, [field]: e.target.value })}
              className="min-h-[120px] bg-background/50"
            />
          ) : (
            <Input
              value={value}
              onChange={(e) => setPitch({ ...pitch, [field]: e.target.value })}
              className="bg-background/50"
            />
          )
        ) : (
          <p className="text-foreground/90 whitespace-pre-wrap">{value}</p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Your Pitch is Ready!
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Review and edit your AI-generated pitch
            </p>
            <p className="text-accent/70" dir="rtl">
              Apni AI-generated pitch ko review aur edit karein
            </p>
          </div>

          <div className="flex gap-4 justify-center mb-8">
            <Button
              onClick={handleRegenerate}
              className="bg-gradient-primary hover:shadow-glow transition-all"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Regenerate Pitch
            </Button>
            <Button
              onClick={handleExport}
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
            >
              <Download className="w-4 h-4 mr-2" />
              Export as PDF
            </Button>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/30 shadow-glow">
              <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                {pitch.name}
              </h2>
              <p className="text-xl text-accent italic">"{pitch.tagline}"</p>
            </div>

            <PitchSection
              label="Elevator Pitch"
              field="elevatorPitch"
              value={pitch.elevatorPitch}
              multiline
            />

            <div className="grid md:grid-cols-2 gap-6">
              <PitchSection
                label="Problem"
                field="problem"
                value={pitch.problem}
                multiline
              />
              <PitchSection
                label="Solution"
                field="solution"
                value={pitch.solution}
                multiline
              />
            </div>

            <PitchSection
              label="Target Audience"
              field="targetAudience"
              value={pitch.targetAudience}
              multiline
            />

            <PitchSection
              label="Landing Page Copy"
              field="landingPageCopy"
              value={pitch.landingPageCopy}
              multiline
            />

            <div className="pt-6 border-t border-border/50 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="text-accent">Reminder:</span> AI sirf madad ke liye hai, final faisla aapka apna hai
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
