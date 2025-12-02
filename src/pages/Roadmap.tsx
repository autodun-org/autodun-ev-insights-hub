import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Sparkles, Rocket } from "lucide-react";

const roadmapPhases = [
  {
    status: "live",
    icon: CheckCircle2,
    phase: "Current - Live Now",
    title: "Autodun EV Finder (MVP)",
    color: "primary",
    features: [
      "Interactive map of UK EV charging points",
      "Council boundary overlays",
      "ML-powered station scoring engine",
      "Driver feedback and sentiment layer",
      "Real-time charger status updates",
      "Basic reporting and analytics",
    ],
    description:
      "Our MVP is live and helping EV drivers find reliable charging while providing councils with the data they need to make informed infrastructure decisions.",
  },
  {
    status: "next",
    icon: Clock,
    phase: "Next 3-6 Months",
    title: "MOT Risk Predictor",
    color: "blue",
    features: [
      "Predict MOT failure risk by area and vehicle type",
      "Historical MOT data analysis with ML",
      "Identify correlation between charging access and vehicle maintenance",
      "Risk heatmaps for council planning",
      "Integration with existing EV infrastructure data",
      "Automated alerts for high-risk zones",
    ],
    description:
      "Extend our platform beyond charging to help councils understand broader automotive trends and maintenance needs across their areas.",
  },
  {
    status: "soon",
    icon: Sparkles,
    phase: "Coming Soon",
    title: "Smart Auto Assistant (AI Agent)",
    color: "purple",
    features: [
      "Natural language interface for complex queries",
      "Answer questions like 'Where should we place 10 new chargers?'",
      "Explain station underperformance with context",
      "Generate custom reports on demand",
      "Predictive modeling for infrastructure planning",
      "Integration with all Autodun data sources",
    ],
    description:
      "An AI-powered assistant that makes infrastructure planning as simple as asking a question. Get instant, data-driven answers to complex planning challenges.",
  },
  {
    status: "future",
    icon: Rocket,
    phase: "Future Vision",
    title: "Full EV Intelligence Platform",
    color: "slate",
    features: [
      "Real-time grid impact monitoring",
      "V2G (Vehicle-to-Grid) optimization",
      "Dynamic pricing recommendations",
      "Integration with smart city platforms",
      "Expansion beyond UK borders",
      "Advanced predictive analytics for all stakeholders",
    ],
    description:
      "Our long-term vision is to become the comprehensive intelligence platform for electric mobility infrastructure across the UK and beyond.",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/20",
  },
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-500",
    border: "border-blue-500/20",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-500",
    border: "border-purple-500/20",
  },
  slate: {
    bg: "bg-slate-500/10",
    text: "text-slate-500",
    border: "border-slate-500/20",
  },
};

const Roadmap = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-neutral-50 to-background py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                Product Roadmap
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Building the Future of{" "}
                <span className="text-primary">EV Intelligence</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                We're constantly evolving. Here's what we're building and where
                we're headed.
              </p>
            </div>
          </Container>
        </section>

        {/* Roadmap Timeline */}
        <section className="py-20">
          <Container>
            <div className="space-y-12">
              {roadmapPhases.map((phase, index) => {
                const colors = colorClasses[phase.color as keyof typeof colorClasses];
                return (
                  <div key={index} className="relative">
                    {/* Connector Line */}
                    {index < roadmapPhases.length - 1 && (
                      <div className="absolute left-6 top-24 h-full w-0.5 bg-border md:left-1/2" />
                    )}

                    <div className="grid gap-8 md:grid-cols-2 md:items-start">
                      {/* Left: Phase Info (mobile + desktop) */}
                      <div className={`md:text-right ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <div className="flex items-center gap-3 md:justify-end">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg}`}>
                            <phase.icon className={`h-6 w-6 ${colors.text}`} />
                          </div>
                          <span className={`rounded-full px-3 py-1 text-xs font-medium ${colors.bg} ${colors.text}`}>
                            {phase.phase}
                          </span>
                        </div>
                      </div>

                      {/* Right: Card Content */}
                      <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                        <Card className={`border ${colors.border}`}>
                          <CardContent className="pt-6">
                            <h3 className="mb-3 text-2xl font-bold">{phase.title}</h3>
                            <p className="mb-6 text-muted-foreground">
                              {phase.description}
                            </p>
                            <div>
                              <h4 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                                Key Features
                              </h4>
                              <ul className="space-y-2">
                                {phase.features.map((feature, featureIndex) => (
                                  <li
                                    key={featureIndex}
                                    className="flex items-start gap-2 text-sm"
                                  >
                                    <CheckCircle2 className={`mt-0.5 h-4 w-4 flex-shrink-0 ${colors.text}`} />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Feedback Section */}
        <section className="bg-neutral-50 py-20">
          <Container size="narrow">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Have a Feature Request?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                We're always listening. If you have ideas for how we can make
                Autodun better, we want to hear from you.
              </p>
              <a
                href="/contact"
                className="inline-block text-lg font-medium text-primary transition-smooth hover:text-primary/80"
              >
                Share Your Feedback →
              </a>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Roadmap;
