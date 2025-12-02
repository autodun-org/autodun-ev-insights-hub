import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Flag, Sparkles } from "lucide-react";
import HeroAnimation from "./HeroAnimation";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-subtle px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              EV Intelligence Platform for the UK
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Find better EV charging spots.{" "}
              <span className="text-primary">Help improve your city.</span>
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl">
              Autodun gives you a clean, easy-to-use map of EV chargers across
              the UK. Report issues, share feedback, and help shape future
              charging decisions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="gradient-hero text-base">
                <a href="https://ev.autodun.com" target="_blank" rel="noreferrer">
                  <MapPin className="mr-2 h-5 w-5" />
                  Find Charging Points
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link to="/for-drivers">
                  <Flag className="mr-2 h-5 w-5" />
                  Report a Charger Issue
                </Link>
              </Button>
            </div>

            {/* Reassurance */}
            <p className="text-sm text-muted-foreground">
              ✓ Free to use for all EV drivers · ✓ No login required
            </p>
          </div>

          {/* Right: Animated Demo */}
          <div className="relative">
            <HeroAnimation />

            {/* Floating Stats */}
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card p-4 shadow-lg">
              <div className="text-3xl font-bold text-primary">12K+</div>
              <div className="text-sm text-muted-foreground">Charging Points</div>
            </div>

            <div className="absolute -right-4 -top-4 rounded-xl border border-border bg-card p-4 shadow-lg">
              <div className="text-3xl font-bold text-primary">350+</div>
              <div className="text-sm text-muted-foreground">UK Councils</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
