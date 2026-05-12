import { Shield } from "lucide-react";

// components/WhyChoose.jsx
const WhyChoose = () => {
  const features = [
    { title: "Wide Range of Listings", icon: Shield },
    { title: "Trusted Agents", icon: Shield },
    { title: "Safe & Secure", icon: Shield },
    { title: "Best Deals", icon: Shield },
  ];

  return (
    <section className="bg-gray-100 p-16 mx-auto w-full h-screen">
      <h2 className="text-center text-4xl font-bold mb-10">
        Why Choose Us
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 grid-cols-2 p-4 gap-6 text-center">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
          <div key={i} className="flex flex-col items-center justify-center gap-4 p-20 bg-white rounded-lg shadow-sm text-xl text-gray-600">
            <Icon />
            <p className="font-semibold">{f.title}</p>
          </div>
        )})}
      </div>
    </section>
  );
};

export default WhyChoose;