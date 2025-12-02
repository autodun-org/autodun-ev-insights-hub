import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { MapPin, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    userType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Integrate with actual form submission endpoint
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      organisation: "",
      userType: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-neutral-50 to-background py-20">
          <Container size="narrow">
            <div className="text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                Get in Touch
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Let's Talk About{" "}
                <span className="text-primary">EV Infrastructure</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Whether you're an EV driver, council, or infrastructure partner,
                we'd love to hear from you.
              </p>
            </div>
          </Container>
        </section>

        {/* Contact Options */}
        <section className="py-12">
          <Container>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-border">
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">EV Drivers</h3>
                  <p className="text-sm text-muted-foreground">
                    Report issues, suggest locations, or ask questions about the
                    platform.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">Councils & Planners</h3>
                  <p className="text-sm text-muted-foreground">
                    Request a demo, discuss data needs, or explore partnership
                    opportunities.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">Infrastructure Partners</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn how Autodun can help optimize your charging network.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Contact Form */}
        <section className="pb-20">
          <Container size="narrow">
            <Card className="border-border shadow-lg">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Organisation */}
                  <div className="space-y-2">
                    <Label htmlFor="organisation">
                      Organisation <span className="text-muted-foreground">(optional)</span>
                    </Label>
                    <Input
                      id="organisation"
                      name="organisation"
                      type="text"
                      placeholder="Your council, company, or network"
                      value={formData.organisation}
                      onChange={handleChange}
                    />
                  </div>

                  {/* User Type */}
                  <div className="space-y-2">
                    <Label htmlFor="userType">
                      I am a... <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      required
                      value={formData.userType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, userType: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="driver">EV Driver</SelectItem>
                        <SelectItem value="council">Council / Planner</SelectItem>
                        <SelectItem value="developer">Developer</SelectItem>
                        <SelectItem value="network">Charging Network</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us what you need help with..."
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" size="lg" className="w-full gradient-hero">
                    Send Message
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
