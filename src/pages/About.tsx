import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, Shield, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "User-First",
    description: "Every feature we build starts with the needs of EV drivers and the communities they live in.",
  },
  {
    icon: Zap,
    title: "Data-Driven",
    description: "We believe in evidence-based decisions. Real data, real insights, real impact.",
  },
  {
    icon: Shield,
    title: "Privacy-Focused",
    description: "Your data is yours. We anonymize everything and never sell personal information.",
  },
  {
    icon: Globe,
    title: "UK-First",
    description: "Built specifically for the UK market with a deep understanding of local infrastructure needs.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-neutral-50 to-background py-20">
          <Container size="narrow">
            <div className="text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                About Autodun
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Building Better{" "}
                <span className="text-primary">EV Infrastructure</span>{" "}
                Together
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                We're on a mission to make EV charging reliable, accessible, and
                data-driven for everyone in the UK.
              </p>
            </div>
          </Container>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <Container size="narrow">
            <div className="prose prose-lg mx-auto max-w-none">
              <h2 className="mb-6 text-3xl font-bold tracking-tight">Our Story</h2>
              <p className="mb-6 text-muted-foreground">
                The UK is rapidly transitioning to electric vehicles. By 2030,
                the sale of new petrol and diesel cars will be banned, and
                millions of drivers will need access to reliable public charging
                infrastructure.
              </p>
              <p className="mb-6 text-muted-foreground">
                But here's the problem: councils and infrastructure providers are
                making billion-pound decisions based on incomplete data,
                spreadsheets, and guesswork. Meanwhile, EV drivers struggle with
                broken chargers, unreliable apps, and no way to influence where
                new charging points are installed.
              </p>
              <p className="mb-6 text-muted-foreground">
                <strong>Autodun was built to solve this.</strong> We created a
                platform that gives EV drivers a voice while providing councils
                and infrastructure partners with the real-time data and machine
                learning insights they need to make smarter investments.
              </p>
              <p className="text-muted-foreground">
                We're bridging the gap between drivers and decision-makers,
                creating a feedback loop that benefits everyone: better charging
                for drivers, better data for councils, and a more efficient path
                to Net Zero for the UK.
              </p>
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="bg-neutral-50 py-20">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Our Values
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                The principles that guide how we build Autodun
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="border-border bg-background">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Tech Stack */}
        <section className="py-20">
          <Container size="narrow">
            <div className="text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Built with Modern Technology
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Autodun is built on a modern, scalable tech stack designed for
                reliability and performance.
              </p>
              <div className="grid gap-6 text-left sm:grid-cols-2">
                <Card className="border-border">
                  <CardContent className="pt-6">
                    <h3 className="mb-2 font-semibold">Frontend</h3>
                    <p className="text-sm text-muted-foreground">
                      React, TypeScript, and modern web technologies for a fast,
                      responsive user experience.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="pt-6">
                    <h3 className="mb-2 font-semibold">Data & ML</h3>
                    <p className="text-sm text-muted-foreground">
                      Machine learning models trained on real UK charging data to
                      provide actionable insights.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="pt-6">
                    <h3 className="mb-2 font-semibold">Privacy</h3>
                    <p className="text-sm text-muted-foreground">
                      All user data is anonymized and encrypted. We comply with
                      UK GDPR standards.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="pt-6">
                    <h3 className="mb-2 font-semibold">UK-Focused</h3>
                    <p className="text-sm text-muted-foreground">
                      Designed specifically for UK councils, networks, and
                      infrastructure requirements.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        {/* Mission Statement */}
        <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
          <Container size="narrow">
            <div className="rounded-2xl border border-primary/20 bg-background p-8 text-center shadow-xl md:p-12">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground">
                To accelerate the UK's transition to electric vehicles by
                connecting drivers, councils, and infrastructure partners with
                the data and insights they need to build a reliable, accessible
                charging network for everyone.
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
