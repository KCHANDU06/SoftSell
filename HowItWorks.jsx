const steps = [
  { title: "Upload License", icon: "📤" },
  { title: "Get Valuation", icon: "💰" },
  { title: "Get Paid", icon: "🏦" },
];

const HowItWorks = () => (
  <section className="py-20 text-center bg-white">
    <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
    <div className="flex justify-center gap-10 flex-wrap">
      {steps.map((step, index) => (
        <div key={index} className="w-40">
          <div className="text-4xl">{step.icon}</div>
          <p className="mt-2 font-semibold">{step.title}</p>
        </div>
      ))}
    </div>
  </section>
);
export default HowItWorks;
