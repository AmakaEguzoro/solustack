import React from "react";

const footer = () => {
  return (
    <div className="bg-footer w-full mt-24 py-y px-2 font-poppins text-white">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6   py-8">
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Solustack</p>
          <p className="py-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et{" "}
          </p>
          <button class="bg-white hover:bg-gray-100 text-black font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            contact Us
          </button>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1">Work</li>
            <li className="py-1">Services</li>
            <li className="py-1">About Us</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="py-1">+8801913876520</li>
            <li className="py-1">company@gmail.com</li>
            <li className="py-1">Jobs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default footer;
