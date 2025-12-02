import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FinalCTASection = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl border border-primary/20 bg-background p-8 shadow-xl md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Want to use Autodun in your area?
              </h2>
              <p className="text-lg text-muted-foreground">
                We're onboarding EV drivers and a small number of UK councils
                and infrastructure partners. Get early access to the platform
                and help shape the future of EV charging.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Button asChild size="lg" className="gradient-hero">
                <Link to="/contact">Request a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://ev.autodun.com" target="_blank" rel="noopener noreferrer">
                  Try EV Finder
                </a>
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                No credit card required · Free for EV drivers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
