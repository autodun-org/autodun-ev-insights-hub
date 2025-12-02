import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, Clock, Sparkles } from "lucide-react";

const roadmapItems = [
  {
    status: "live",
    icon: CheckCircle2,
    title: "Autodun EV Finder (MVP)",
    description: "Interactive map with council overlays, station scoring, and feedback layer.",
  },
  {
    status: "next",
    icon: Clock,
    title: "MOT Risk Predictor",
    description: "Predict areas and vehicles at higher risk of MOT issues over time.",
  },
  {
    status: "soon",
    icon: Sparkles,
    title: "Smart Auto Assistant",
    description: "AI agent that answers complex questions about charging infrastructure planning.",
  },
];

const RoadmapPreviewSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Our Roadmap
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We're just getting started. Here's what's coming next.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {roadmapItems.map((item, index) => (
            <Card key={index} className="border-border">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      item.status === "live"
                        ? "bg-primary/10 text-primary"
                        : item.status === "next"
                        ? "bg-blue-500/10 text-blue-500"
                        : "bg-purple-500/10 text-purple-500"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      item.status === "live"
                        ? "bg-primary/10 text-primary"
                        : item.status === "next"
                        ? "bg-blue-500/10 text-blue-500"
                        : "bg-purple-500/10 text-purple-500"
                    }`}
                  >
                    {item.status === "live"
                      ? "Live Now"
                      : item.status === "next"
                      ? "Next 3-6 Months"
                      : "Coming Soon"}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/roadmap">View Full Roadmap →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoadmapPreviewSection;
