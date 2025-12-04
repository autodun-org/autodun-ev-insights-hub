import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { path: "/", label: "Home" },
    { path: "/for-drivers", label: "For Drivers" },
    { path: "/for-councils", label: "For Councils" },
    { path: "/roadmap", label: "Roadmap" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-border bg-neutral-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex items-center transition-smooth hover:opacity-80"
            >
              {/* Same style logo as header, slightly smaller */}
              <span className="flex items-baseline font-semibold leading-none">
                <span className="relative inline-flex items-center">
                  <span className="text-[1.4rem] md:text-[1.6rem] text-[#16a34a] font-extrabold">
                    A
                  </span>
                  <Zap
                    className="absolute -top-1 -right-3 h-3 w-3 text-[#16a34a]"
                    aria-hidden="true"
                  />
                </span>
                <span className="ml-[1px] text-[1.05rem] md:text-[1.15rem] tracking-tight text-foreground">
                  utodun
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              EV charging intelligence for the UK. Helping drivers find better
              charging spots and councils make data-driven infrastructure
              decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground transition-smooth hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Get in Touch</h3>
            <p className="text-sm text-muted-foreground">
              Want to learn more about Autodun or request a demo?
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-block text-sm font-medium text-primary transition-smooth hover:text-primary/80"
            >
              Contact Us →
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Autodun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
