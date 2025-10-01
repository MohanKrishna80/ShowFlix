import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-900 text-white px-4 sm:px-8 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-red-600">ShowFlix</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            ShowFlix is your go-to movie platform to explore the latest hits, 
            top-rated classics, and upcoming blockbusters. Browse movies by category, 
            watch trailers, and discover new favorites all in one place.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Our mission is to make movie discovery simple, fun, and interactive. 
            Whether you’re a casual viewer or a film buff, ShowFlix offers something 
            for everyone.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
