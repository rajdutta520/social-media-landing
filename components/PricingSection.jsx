const PricingSection = () => (
    <section className="py-20 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Pricing</h2>
      <div className="flex justify-center">
        <div className="bg-gray-200 p-8 rounded-lg">
          <h3 className="text-xl font-bold">Free Tier</h3>
          <p className="my-4">Start with a free trial and explore the features.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
  
  export default PricingSection;
  