import { MapPin, MessageSquare, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: MapPin,
    title: "EV Charger Map for the UK",
    description:
      "Browse thousands of charging points across the UK with up-to-date locations and detailed station information.",
  },
  {
    icon: MessageSquare,
    title: "Report Problems in Seconds",
    description:
      "Found a broken charger? Report it instantly and help other drivers avoid wasted trips.",
  },
  {
    icon: TrendingUp,
    title: "Your Feedback Shapes Future Chargers",
    description:
      "Your reports and ratings directly inform councils and networks on where to invest in new infrastructure.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Built for EV Drivers
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need to find, use, and improve EV charging
            infrastructure in your area.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group border-border bg-surface transition-smooth hover:border-primary/50 hover:shadow-lg"
            >
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-subtle transition-smooth group-hover:bg-primary-light">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
