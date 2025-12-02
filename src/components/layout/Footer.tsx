import { Link } from "react-router-dom";
import logoIconLight from "@/assets/logo-icon-light.png";

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
              <img
                src={logoIconLight}
                alt="Autodun"
                className="h-5 w-5 shrink-0 -mr-[1px]"  // ← keep header + footer consistent
              />
              <span className="text-xl font-semibold tracking-tight leading-none text-foreground">
                utodun
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
