import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/for-drivers", label: "For Drivers" },
    { path: "/for-councils", label: "For Councils" },
    { path: "/insights", label: "Insights" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo – single A with small icon + utodun */}
        <Link
          to="/"
          className="flex items-center transition-smooth hover:opacity-80"
        >
          <span className="flex items-baseline font-semibold leading-none">
            {/* Big green A with small icon */}
            <span className="relative inline-flex items-center">
              <span className="text-[1.6rem] md:text-[1.8rem] text-[#16a34a]">
                A
              </span>
              <Zap
                className="absolute -top-1 -right-3 h-3 w-3 md:h-3.5 md:w-3.5 text-[#16a34a]"
                aria-hidden="true"
              />
            </span>

            {/* rest of word – no extra A, no gap */}
            <span className="ml-[1px] text-[1.15rem] md:text-[1.25rem] tracking-tight text-foreground">
              utodun
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-smooth ${
                isActive(link.path)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Button asChild className="ml-2 gradient-hero">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-smooth ${
                    isActive(link.path)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-2">
                <Button asChild className="w-full gradient-hero">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
