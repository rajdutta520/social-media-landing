'use client';

import { motion } from 'framer-motion';

const HeroSection = () => (
  <section className="bg-gray-800 text-white h-screen flex flex-col justify-center items-center">
    <motion.h1 
      className="text-5xl font-bold mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      Automate Your Social Media Content
    </motion.h1>
    <p className="text-xl mb-8">Create, schedule, and automate your posts easily!</p>
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
        Sign Up
      </button>
      <button className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded">
        Demo
      </button>
    </div>
  </section>
);

export default HeroSection;
