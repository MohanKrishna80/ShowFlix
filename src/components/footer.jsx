import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 p-5">
      <div className="flex flex-col md:flex-row md:justify-start md:pl-20 gap-8 md:gap-20">
        <ul className="flex items-center justify-center md:justify-start text-3xl md:text-5xl text-white gap-8 md:gap-20 cursor-pointer ">
          <li className="hover:text-blue-400">
            <i className="fa-brands fa-google"></i>
          </li>
          <li className="hover:text-blue-400">
            <i className="fa-brands fa-facebook"></i>
          </li>
          <li className="hover:text-blue-400">
            <i className="fa-brands fa-x-twitter"></i>
          </li >
          <li className="hover:text-blue-400">
            <i className="fa-brands fa-youtube"></i>
          </li >
        </ul>

        <ul className="flex flex-col gap-2 md:gap-3 text-center md:text-left cursor-pointer">
          <li className="hover:text-blue-400">About</li>
          <li className="hover:text-blue-400">Contact Us</li>
          <li className="hover:text-blue-400">Community</li>
          <li className="hover:text-blue-400">Join Us</li>
        </ul>

        <ul className="flex flex-col gap-2 md:gap-3 text-center md:text-left cursor-pointer">
          <li className="hover:text-blue-400">Movies</li>
          <li className="hover:text-blue-400">TMDB</li>
          <li className="hover:text-blue-400">Rate Us</li>
          <li className="hover:text-blue-400">Feedback</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
