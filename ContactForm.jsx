import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", type: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section className="py-20 bg-white px-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input className="w-full border p-2 rounded" name="name" placeholder="Name" required onChange={handleChange} />
        <input className="w-full border p-2 rounded" name="email" placeholder="Email" type="email" required onChange={handleChange} />
        <input className="w-full border p-2 rounded" name="company" placeholder="Company" onChange={handleChange} />
        <select className="w-full border p-2 rounded" name="type" required onChange={handleChange}>
          <option value="">Select License Type</option>
          <option value="SaaS">SaaS</option>
          <option value="Enterprise">Enterprise</option>
        </select>
        <textarea className="w-full border p-2 rounded" name="message" placeholder="Your message" rows={4} required onChange={handleChange}></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded">Submit</button>
      </form>
    </section>
  );
};
export default ContactForm;
