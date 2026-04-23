// components/WhyChoose.jsx
const WhyChoose = () => {
  const features = [
    { title: "Wide Range of Listings" },
    { title: "Trusted Agents" },
    { title: "Safe & Secure" },
    { title: "Best Deals" },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <h2 className="text-center text-2xl font-bold mb-10">
        Why Choose Us
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 grid-cols-2 p-4 gap-6 text-center">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-white rounded-lg shadow-sm">
            <p className="font-semibold">{f.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;