import { Card, CardContent } from "@/components/ui/card";
import { Map, Star, MessageCircle, FileText } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "EV Heatmaps & Council Overlays",
    description: "Visualize charging demand and infrastructure gaps across council boundaries.",
  },
  {
    icon: Star,
    title: "Station Scoring Engine",
    description: "ML-powered ratings that identify high-performing and problematic charging locations.",
  },
  {
    icon: MessageCircle,
    title: "Feedback & Sentiment Layer",
    description: "Real driver experiences aggregated to show which stations work and which don't.",
  },
  {
    icon: FileText,
    title: "Exportable Reports for Funding",
    description: "Generate evidence packs for grant applications and infrastructure planning.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Powerful Features for Data-Driven Decisions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need to understand and improve EV charging
            infrastructure
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-border bg-surface transition-smooth hover:shadow-lg"
            >
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-subtle transition-smooth group-hover:bg-primary-light">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
