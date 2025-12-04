import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  MapPin,
  Zap,
  Clock,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";

const metrics = [
  {
    title: "Average Utilisation",
    value: "34%",
    change: "+5%",
    changeType: "positive",
    icon: BarChart3,
    description: "Across 142 chargers in your area",
  },
  {
    title: "Reliability Score",
    value: "78/100",
    change: "+3",
    changeType: "positive",
    icon: TrendingUp,
    description: "Based on driver feedback this month",
  },
  {
    title: "Reported Issues",
    value: "12",
    change: "-4",
    changeType: "positive",
    icon: AlertTriangle,
    description: "Open issues awaiting resolution",
  },
];

const hotspots = [
  { location: "Town Centre Car Park", score: 92, status: "high-demand" },
  { location: "Retail Park North", score: 87, status: "high-demand" },
  { location: "Station Road", score: 45, status: "underserved" },
  { location: "Industrial Estate", score: 38, status: "underserved" },
];

const recentFeedback = [
  { charger: "Market Square CP", rating: "positive", comment: "Fast and reliable, always available" },
  { charger: "Library Car Park", rating: "negative", comment: "Out of order for 2 weeks now" },
  { charger: "Sports Centre", rating: "positive", comment: "Good location, easy access" },
];

const CouncilDashboard = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <Container>
          {/* Header */}
          <div className="mb-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              Demo Dashboard
            </div>
            <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
              Council EV Insight Dashboard
            </h1>
            <p className="text-lg text-muted-foreground">
              This is a demo view showing sample data. Book a demo to see real data for your council area.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              This dashboard is mainly for local authorities and partners to explore EV charging insights.{" "}
              Regular drivers can continue using the main{" "}
              <a
                href="https://ev.autodun.com"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline hover:text-primary/80"
              >
                Autodun EV map
              </a>.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="mb-8 grid gap-6 md:grid-cols-3">
            {metrics.map((metric, index) => (
              <Card key={index} className="border-border">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </CardTitle>
                  <metric.icon className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{metric.value}</span>
                    <span className={`text-sm font-medium ${
                      metric.changeType === "positive" ? "text-primary" : "text-destructive"
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Hotspots & Gaps */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Hotspots & Coverage Gaps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {hotspots.map((spot, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg border border-border p-3">
                      <div>
                        <p className="font-medium">{spot.location}</p>
                        <p className="text-sm text-muted-foreground">
                          {spot.status === "high-demand" ? "High demand area" : "Underserved area"}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`rounded-full px-3 py-1 text-sm font-medium ${
                          spot.status === "high-demand" 
                            ? "bg-primary/10 text-primary" 
                            : "bg-destructive/10 text-destructive"
                        }`}>
                          {spot.score}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Feedback */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Recent Driver Feedback
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentFeedback.map((feedback, index) => (
                    <div key={index} className="flex items-start gap-3 rounded-lg border border-border p-3">
                      <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        feedback.rating === "positive" 
                          ? "bg-primary/10" 
                          : "bg-destructive/10"
                      }`}>
                        {feedback.rating === "positive" ? (
                          <ThumbsUp className="h-4 w-4 text-primary" />
                        ) : (
                          <ThumbsDown className="h-4 w-4 text-destructive" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{feedback.charger}</p>
                        <p className="text-sm text-muted-foreground">{feedback.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 text-center">
            <h2 className="mb-2 text-2xl font-bold">Want to see real data for your area?</h2>
            <p className="mb-6 text-muted-foreground">
              Book a free demo and we'll show you insights specific to your council boundaries.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="gradient-hero">
                <Link to="/contact">Book a council demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/for-councils">Learn more</Link>
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default CouncilDashboard;
