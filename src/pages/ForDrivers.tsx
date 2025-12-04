import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, MessageSquare, Star, ShieldCheck, Users, ThumbsUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Avoid bad charging stops",
    description: "See which chargers actually work before you drive there. No more wasted trips to broken or out-of-service stations.",
  },
  {
    icon: MessageSquare,
    title: "See real driver feedback",
    description: "Read ratings and comments from other UK EV drivers. Know what to expect before you arrive.",
  },
  {
    icon: Users,
    title: "Help fix the network",
    description: "Your reports and ratings feed into data used by councils and charging networks to improve infrastructure.",
  },
];

const steps = [
  {
    number: "1",
    title: "Open the map",
    description: "Visit ev.autodun.com on any device. No app download or login required.",
  },
  {
    number: "2",
    title: "Check score & feedback",
    description: "Tap any charger to see its reliability score and recent driver feedback.",
  },
  {
    number: "3",
    title: "Leave a rating",
    description: "After charging, rate your experience to help other drivers and improve the network.",
  },
];

const faqs = [
  {
    question: "Is Autodun free to use?",
    answer: "Yes! Autodun is completely free for all UK EV drivers. No subscriptions, no hidden fees, no premium tiers.",
  },
  {
    question: "Do I need to create an account?",
    answer: "No account is required to view the map, search for chargers, or check ratings. You can use it anonymously right now.",
  },
  {
    question: "Where does your data come from?",
    answer: "We combine official UK charger registry data with real-time driver feedback and reliability reports to give you the most accurate picture.",
  },
  {
    question: "Is my data private?",
    answer: "Yes. We don't track your location or sell personal data. Any feedback you submit is aggregated and anonymized.",
  },
  {
    question: "Is this UK only?",
    answer: "Currently, Autodun focuses exclusively on the UK. We're exploring other regions for the future.",
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
                Built for EV drivers in the UK
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Find chargers that{" "}
                <span className="text-primary">actually work</span> for you.
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Stop arriving at broken or busy chargers. See real driver feedback, 
                reliability trends, and find spots that work — before you drive there.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="gradient-hero">
                  <a href="https://ev.autodun.com" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-5 w-5" />
                    Open EV map now
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/for-councils">See how councils use this</Link>
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Free for UK drivers · No login required · Works on mobile & desktop
              </p>
            </div>
          </Container>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Why drivers use Autodun
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                A smarter way to find EV charging across the UK
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-border transition-smooth hover:shadow-lg hover:border-primary/30">
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

        {/* How It Works Section */}
        <section className="bg-neutral-50 py-20">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                How it works
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Three simple steps to better charging
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={index} className="relative text-center">
                  {/* Connector Line */}
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

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <Container size="narrow">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers for UK EV drivers
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
                Ready to try a smarter EV charging map?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Join thousands of UK drivers finding better chargers with Autodun.
              </p>
              <Button asChild size="lg" className="gradient-hero">
                <a href="https://ev.autodun.com" target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-5 w-5" />
                  Open Autodun EV map
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
