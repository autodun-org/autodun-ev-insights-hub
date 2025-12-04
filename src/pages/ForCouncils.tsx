import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Map, 
  BarChart3, 
  AlertTriangle, 
  FileText, 
  CheckCircle2,
  Building2,
  MapPinned,
  TreePine,
  Hotel
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: BarChart3,
    title: "Live view of charger performance",
    description: "See real-time reliability scores, usage patterns, and driver ratings for every charger in your area.",
  },
  {
    icon: AlertTriangle,
    title: "Hotspots and coverage gaps",
    description: "Identify underserved areas, high-demand zones, and infrastructure gaps with heatmaps and overlays.",
  },
  {
    icon: FileText,
    title: "Evidence for funding bids & strategy",
    description: "Generate data-backed reports to support LEVI bids, planning applications, and council strategies.",
  },
];

const steps = [
  {
    number: "1",
    title: "Connect your data",
    description: "We overlay your council boundaries, parking data, and local constraints onto our live charger map.",
  },
  {
    number: "2",
    title: "Review maps & dashboards",
    description: "Explore interactive heatmaps, reliability trends, and driver feedback specific to your area.",
  },
  {
    number: "3",
    title: "Act on feedback",
    description: "Use insights to prioritize investments, respond to resident concerns, and track improvements.",
  },
];

const useCases = [
  {
    icon: Building2,
    title: "HMO & high-density areas",
    description: "Identify where residents without driveways need public charging most.",
  },
  {
    icon: Hotel,
    title: "Visitor economies",
    description: "Support tourism by ensuring chargers are available near attractions and amenities.",
  },
  {
    icon: TreePine,
    title: "Rural coverage",
    description: "Find gaps in rural areas where EV adoption is limited by infrastructure.",
  },
  {
    icon: MapPinned,
    title: "Strategic placement",
    description: "Use demand data to site new chargers where they'll have the greatest impact.",
  },
];

const faqs = [
  {
    question: "Where does your data come from?",
    answer: "We combine the UK's official National Chargepoint Registry with real-time driver feedback, reliability reports, and usage patterns to give you a complete picture.",
  },
  {
    question: "How is driver data handled?",
    answer: "All driver feedback is aggregated and anonymized. We never share individual user data with councils or third parties.",
  },
  {
    question: "What does council access cost?",
    answer: "We offer tiered pricing based on council size and requirements. Contact us for a tailored quote — initial consultations are free.",
  },
  {
    question: "Can we trial the platform?",
    answer: "Yes. We offer demo access so you can explore the dashboard and see data for your area before committing.",
  },
];

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
                Built for local authorities
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                See where EV charging{" "}
                <span className="text-primary">actually works</span> in your area.
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Combine real driver feedback with live charger data and council overlays 
                to make evidence-based infrastructure decisions.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="gradient-hero">
                  <Link to="/contact">Book a council demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href="https://ev.autodun.com/ev-charging-council-dashboard"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BarChart3 className="mr-2 h-5 w-5" />
                    Open council insight dashboard
                  </a>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* What You Get Section */}
        <section className="py-20">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                What you get
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Actionable EV intelligence for local authorities
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="border-border transition-smooth hover:shadow-lg hover:border-primary/30">
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

        {/* How It Works Section */}
        <section className="bg-neutral-50 py-20">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                How Autodun works with councils
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                From data to decisions in three steps
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={index} className="relative text-center">
                  {index < steps.length - 1 && (
                    <div className="absolute left-1/2 top-12 hidden h-1 w-full bg-gradient-to-r from-primary to-primary/20 md:block" />
                  )}
                  <div className="relative">
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-primary/20 bg-background">
                      <span className="text-3xl font-bold text-primary">{step.number}</span>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Use cases
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                How councils are using Autodun data
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {useCases.map((useCase, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="pt-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <useCase.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="bg-neutral-50 py-20">
          <Container size="narrow">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Questions from councils
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
          <Container>
            <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-background p-8 text-center shadow-xl md:p-12">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to see what's happening in your area?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Book a free demo and explore how Autodun can support your EV infrastructure planning.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="gradient-hero">
                  <Link to="/contact">Book a council demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href="https://ev.autodun.com/ev-charging-council-dashboard"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BarChart3 className="mr-2 h-5 w-5" />
                    View demo dashboard
                  </a>
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                No commitment · Free consultation · Tailored to your area
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
