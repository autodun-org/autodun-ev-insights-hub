import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Map, BarChart3, MessageSquare, FileText, CheckCircle2, XCircle } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "EV Heatmaps",
    description: "Visualize charging demand and infrastructure gaps across your council boundaries with interactive heatmaps.",
  },
  {
    icon: BarChart3,
    title: "ML-Powered Scoring",
    description: "Our machine learning engine rates stations and areas based on usage, reliability, and user feedback.",
  },
  {
    icon: MessageSquare,
    title: "Real Driver Feedback",
    description: "Access aggregated sentiment data from actual EV drivers to understand what works and what doesn't.",
  },
  {
    icon: FileText,
    title: "Funding Evidence Packs",
    description: "Generate comprehensive reports with data, charts, and analysis to support grant applications.",
  },
];

const comparison = {
  without: [
    "Relying on spreadsheets and static data",
    "No real-time feedback from residents",
    "Guesswork about where to place chargers",
    "Difficulty proving ROI to stakeholders",
    "Disconnected from actual user experience",
  ],
  with: [
    "Live interactive maps with ML insights",
    "Real-time driver feedback and sentiment",
    "Model-driven recommendations for placement",
    "Evidence-based reports for funding bids",
    "Direct connection to user needs and issues",
  ],
};

const ForCouncils = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-neutral-50 to-background py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                For Councils & Planners
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Evidence-Based{" "}
                <span className="text-primary">EV Planning</span>{" "}
                for Your Council
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Make smarter infrastructure decisions with real-time data,
                machine learning insights, and direct feedback from EV drivers
                in your area.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="gradient-hero">
                  <Link to="/contact">Request Council Demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/roadmap">View Platform Features</Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Powerful Tools for Infrastructure Planning
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Everything you need to plan, deploy, and optimize EV charging
                networks in your council area.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {features.map((feature, index) => (
                <Card key={index} className="border-border bg-gradient-card transition-smooth hover:shadow-lg">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Comparison Section */}
        <section className="bg-neutral-50 py-20">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                The Autodun Difference
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Stop guessing. Start using data-driven insights to plan your EV
                infrastructure.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Without Autodun */}
              <Card className="border-destructive/20">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                      <XCircle className="h-6 w-6 text-destructive" />
                    </div>
                    <h3 className="text-xl font-semibold">Without Autodun</h3>
                  </div>
                  <ul className="space-y-3">
                    {comparison.without.map((item, index) => (
                      <li key={index} className="flex gap-3 text-muted-foreground">
                        <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* With Autodun */}
              <Card className="border-primary/20 bg-gradient-card">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">With Autodun</h3>
                  </div>
                  <ul className="space-y-3">
                    {comparison.with.map((item, index) => (
                      <li key={index} className="flex gap-3 text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Built for Multiple Stakeholders
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-border">
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-xl font-semibold">Local Councils</h3>
                  <p className="mb-4 text-muted-foreground">
                    Plan public charging networks with confidence. Understand
                    resident needs, identify gaps, and justify investments with
                    hard data.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Meet Net Zero targets</li>
                    <li>• Support resident EV adoption</li>
                    <li>• Secure grant funding</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-xl font-semibold">Developers</h3>
                  <p className="mb-4 text-muted-foreground">
                    Add value to residential and commercial properties.
                    Understand charging demand before you build.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Increase property values</li>
                    <li>• Future-proof developments</li>
                    <li>• Attract EV drivers</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-xl font-semibold">Networks</h3>
                  <p className="mb-4 text-muted-foreground">
                    Optimize your charging network. Identify underperforming
                    stations and high-opportunity areas.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Maximize utilization</li>
                    <li>• Reduce maintenance costs</li>
                    <li>• Improve customer satisfaction</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
          <Container>
            <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-background p-8 text-center shadow-xl md:p-12">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Transform Your EV Planning?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                See how Autodun can help your council make evidence-based
                decisions about EV infrastructure. Request a personalized demo.
              </p>
              <Button asChild size="lg" className="gradient-hero">
                <Link to="/contact">Request Council Demo</Link>
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                No commitment · Free consultation · Tailored to your needs
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForCouncils;
