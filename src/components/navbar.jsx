import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../redux/slices/searchSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const SearchValue = useSelector((state) => state.search);
  const dispatch = useDispatch();

  return (
    <nav className="bg-black text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0">
          <img
            src="./logo2.png"
            alt="Logo"
            className="h-10 w-40 object-contain xs:w-1 xs:h-1 xs:pr-5"
          />
        </div>

        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-md text-black outline-none bg-white"
            value={SearchValue}
            onChange={(e) => dispatch(setValue(e.target.value))}
          />
        </div>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <ul className="hidden md:flex items-center space-x-6 text-lg">
          <Link to={"/"}>
            <li className="hover:text-gray-400 cursor-pointer">Home</li>
          </Link>

          <Link to={"/about"}>
            <li className="hover:text-gray-400 cursor-pointer">About</li>
          </Link>
          <Link to={"/settings"}>
            <li className="hover:text-gray-400 cursor-pointer">Settings</li>
          </Link>
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden mt-3">
          <ul className="flex flex-col space-y-2 text-center">
            <Link to={"/"}>
              <li className="hover:text-gray-400 cursor-pointer">Home</li>
            </Link>

            <Link to={"/about"}>
              <li className="hover:text-gray-400 cursor-pointer">About</li>
            </Link>
            <Link to={"/settings"}>
              <li className="hover:text-gray-400 cursor-pointer">Settings</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
