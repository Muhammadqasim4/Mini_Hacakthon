import { Target, Zap, Globe, Edit, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Generation",
    description: "Get a complete pitch in seconds with AI-powered insights",
    urdu: "Chand seconds mein complete pitch ready"
  },
  {
    icon: Globe,
    title: "Bilingual Support",
    description: "Create pitches in English and Roman Urdu effortlessly",
    urdu: "English aur Roman Urdu dono mein pitches"
  },
  {
    icon: Target,
    title: "Targeted Content",
    description: "AI analyzes your audience and crafts the perfect message",
    urdu: "Apke audience ke liye perfect message"
  },
  {
    icon: Edit,
    title: "Editable Results",
    description: "Fine-tune every element to match your vision",
    urdu: "Har cheez ko apni marzi se edit karein"
  },
  {
    icon: TrendingUp,
    title: "Professional Quality",
    description: "Investor-ready pitches that make an impact",
    urdu: "Investors ko impress karne wali quality"
  },
  {
    icon: Users,
    title: "Student Friendly",
    description: "Built for aspiring entrepreneurs and students",
    urdu: "Students aur entrepreneurs ke liye banayi gayi"
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Everything You Need
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            To create winning pitches that investors love
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-2">
                  {feature.description}
                </p>
                <p className="text-sm text-accent/70" dir="rtl">
                  {feature.urdu}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
