import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="py-4">
      <p className="text-center text-black text-4xl font-semibold font-poppins ">
        Solustack
      </p>

      <navbar class="flex fixed w-screen">
        <div class="flex-1 flex justify-center text-black font-poppins font-semibold py-4 mx-12">
          <Link
            to="/"
            className="mx-3 hover:underline  hover:decoration-blue-400 active:decoration-blue-400"
          >
            About Us
          </Link>
          <Link
            to="/our-services"
            className="mx-3 hover:underline hover:decoration-blue-400 active:decoration-blue-400"
          >
            Our Services
          </Link>
          <Link
            to="/featured-projects"
            className="mx-3 hover:underline hover:decoration-blue-400 active:decoration-blue-400"
          >
            Featured Projects
          </Link>
          <Link
            to="/why-us"
            className="mx-3 hover:underline hover:decoration-blue-400 active:decoration-blue-400"
          >
            Why Us
          </Link>
          <Link
            to="/contact"
            className="mx-3 hover:underline hover:decoration-blue-400 active:decoration-blue-400"
          >
            Get in Touch
          </Link>
        </div>
      </navbar>
    </div>
  );
};

export default navbar;
