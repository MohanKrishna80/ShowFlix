import React from "react";
import Navbar from "../../components/navbar";
import "./home.css";
import Movies from "../../components/movie/movies";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-900">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold border border-blue-300 rounded px-3 py-2 text-center mx-auto w-auto max-w-fit">
          Welcome to the <span className="text-red-600">ShowFlix</span>
        </h1>

        <Movies category={"now_playing"} />
        <Movies category={"popular"} />
        <Movies category={"top_rated"} />
        <Movies category={"upcoming"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
