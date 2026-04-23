// components/Newsletter.jsx
const Newsletter = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-xl font-bold mb-4">
        Get the latest property updates
      </h2>

      <div className="flex justify-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded border border-gray-300 md:w-3xl"
        />
        <button className="bg-blue-600 text-white px-4 rounded">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;