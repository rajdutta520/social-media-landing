const features = [
    { title: 'Idea Generation', description: 'Get unique content ideas.' },
    { title: 'Content Creation', description: 'Create posts, videos, and reels.' },
    { title: 'Scheduling & Automation', description: 'Automate your posts.' }
  ];
  
  const FeaturesSection = () => (
    <section className="py-20 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-5 border border-gray-300 rounded">
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default FeaturesSection;
  