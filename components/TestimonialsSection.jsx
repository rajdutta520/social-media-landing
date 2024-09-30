const testimonials = [
    { name: 'John Doe', feedback: 'This tool has revolutionized our social media strategy!' },
    { name: 'Jane Smith', feedback: 'I can’t imagine working without this anymore.' }
  ];
  
  const TestimonialsSection = () => (
    <section className="bg-gray-100 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="text-center p-5 border border-gray-300 rounded">
            <p className="text-lg mb-4">"{testimonial.feedback}"</p>
            <h3 className="text-xl font-bold">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default TestimonialsSection;
  