const testimonials = [
  { name: "John Doe", role: "CTO", company: "TechCorp", text: "Amazing service!" },
  { name: "Jane Smith", role: "IT Lead", company: "SoftInc", text: "Quick and reliable." }
];

const Testimonials = () => (
  <section className="py-20 bg-blue-50 text-center">
    <h2 className="text-3xl font-semibold mb-10">What Our Clients Say</h2>
    <div className="flex justify-center flex-wrap gap-8">
      {testimonials.map((t, i) => (
        <div key={i} className="w-64 bg-white p-6 rounded shadow">
          <p>"{t.text}"</p>
          <p className="mt-2 text-sm font-bold">{t.name} - {t.role} @ {t.company}</p>
        </div>
      ))}
    </div>
  </section>
);
export default Testimonials;
