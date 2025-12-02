import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building2, Hammer, Network } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Councils",
    description: "Plan public charging networks with real user data and evidence-based insights.",
  },
  {
    icon: Hammer,
    title: "Developers",
    description: "Understand where chargers add value to residential and commercial sites.",
  },
  {
    icon: Network,
    title: "Networks",
    description: "Identify under-served areas and underperforming stations to optimize ROI.",
  },
];

const B2BTeaserSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Built for EV Drivers —{" "}
            <span className="text-primary">Trusted by Councils & Planners</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            While drivers use Autodun to find and improve charging, councils and
            infrastructure partners use our platform to make smarter investment
            decisions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {audiences.map((audience, index) => (
            <Card key={index} className="border-border bg-gradient-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <audience.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{audience.title}</h3>
                <p className="text-muted-foreground">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/for-councils">Learn More for Councils →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default B2BTeaserSection;
