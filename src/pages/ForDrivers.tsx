import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, MessageSquare, TrendingUp, Shield, Zap, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    icon: MapPin,
    title: "Find Any Charger",
    description: "Access a comprehensive map of every public EV charging point across the UK, with live status updates.",
  },
  {
    icon: MessageSquare,
    title: "Report Issues Fast",
    description: "Broken charger? App not working? Report problems in seconds and help other drivers.",
  },
  {
    icon: TrendingUp,
    title: "Improve Infrastructure",
    description: "Your feedback directly influences where councils and networks invest in new charging points.",
  },
  {
    icon: Shield,
    title: "Avoid Bad Stations",
    description: "See ratings and reviews from real drivers to avoid unreliable or poorly maintained chargers.",
  },
  {
    icon: Zap,
    title: "Plan Your Journey",
    description: "Check charger availability along your route and find backup options near your destination.",
  },
  {
    icon: Users,
    title: "Join the Community",
    description: "Be part of a growing community of UK EV drivers working together to improve charging.",
  },
];

const faqs = [
  {
    question: "Is Autodun free to use?",
    answer: "Yes! Autodun is completely free for all EV drivers. No subscriptions, no hidden fees. We believe everyone should have access to reliable charging information.",
  },
  {
    question: "Do I need to create an account?",
    answer: "No account is required to view the map and search for charging points. However, if you want to report issues or leave feedback, you'll need to create a free account (coming soon).",
  },
  {
    question: "How is my data used?",
    answer: "We aggregate feedback and usage patterns to help councils and charging networks make better infrastructure decisions. All data is anonymized, and we never sell personal information to third parties.",
  },
  {
    question: "How do I report a broken charger?",
    answer: "Simply use our contact form or the 'Report Issue' button on the EV Finder map. Provide the station details and describe the problem. We'll notify the relevant network operator.",
  },
  {
    question: "Can I suggest a new charging location?",
    answer: "Absolutely! We welcome suggestions for new charging locations. Use our contact form to tell us where you think a charger would be most useful and why.",
  },
  {
    question: "Is Autodun available outside the UK?",
    answer: "Currently, Autodun focuses exclusively on the UK market. However, we're exploring expansion to other regions in the future.",
  },
];

const ForDrivers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-neutral-50 to-background py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                For EV Drivers
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Your Complete Guide to{" "}
                <span className="text-primary">UK EV Charging</span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Find reliable charging points, avoid problem stations, and help
                improve the UK's EV infrastructure. All for free.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="gradient-hero">
                  <a href="https://ev.autodun.com" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-5 w-5" />
                    Open EV Map
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#faq">View FAQs</a>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Benefits Grid */}
        <section className="py-20">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Everything You Need
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Autodun gives you all the tools to navigate the UK's EV charging
                network with confidence.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-border transition-smooth hover:shadow-lg">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* How to Get Started */}
        <section className="bg-neutral-50 py-20">
          <Container size="narrow">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Get Started in Seconds
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                No complicated setup. Just visit the map and start exploring.
              </p>
              <Button asChild size="lg" className="gradient-hero">
                <a href="https://ev.autodun.com" target="_blank" rel="noopener noreferrer">
                  Launch EV Finder →
                </a>
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                Works on all devices · No app download required
              </p>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <Container size="narrow">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about using Autodun
              </p>
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
                Ready to Find Better Charging?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Join thousands of UK EV drivers using Autodun to navigate the
                charging network with confidence.
              </p>
              <Button asChild size="lg" className="gradient-hero">
                <a href="https://ev.autodun.com" target="_blank" rel="noopener noreferrer">
                  Open EV Map Now
                </a>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForDrivers;
