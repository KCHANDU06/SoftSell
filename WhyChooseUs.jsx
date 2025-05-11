const points = [
  "Fast Payouts",
  "Secure Transactions",
  "Trusted by 1000+ clients",
  "24/7 Support"
];

const WhyChooseUs = () => (
  <section className="py-20 bg-gray-100 text-center">
    <h2 className="text-3xl font-semibold mb-10">Why Choose Us</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
      {points.map((point, index) => (
        <div key={index} className="p-4 bg-white rounded shadow">
          <p>{point}</p>
        </div>
      ))}
    </div>
  </section>
);
export default WhyChooseUs;
