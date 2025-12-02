const steps = [
  {
    number: "01",
    title: "Check the Map",
    description: "View all charging points in your area with real-time availability and ratings.",
  },
  {
    number: "02",
    title: "Report Issues",
    description: "Use simple forms to report broken chargers, missing amenities, or access problems.",
  },
  {
    number: "03",
    title: "Drive Change",
    description: "Your feedback feeds into data used by councils and networks to improve infrastructure.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Three simple steps to better EV charging
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-1 w-full bg-gradient-to-r from-primary to-primary/20 md:block" />
              )}

              <div className="relative text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-primary/20 bg-background">
                  <span className="text-3xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
