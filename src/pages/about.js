import React from "react";
import About from "../assets/about-solu.svg";

const about = () => {
  return (
    <div className="font-poppins">
      {/* about us section  */}

      <div className="bg-black text-gray-100 mt-8 px-2">
        <div className="max-w-screen-xl mt-24 px-4 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-6 mx-auto bg-gray-100 text-gray-900 rounded-lg ">
          <div className="flex flex-col ">
            <h2 className="text-3xl lg:text-3xl font-bold text-white leading-tight">
              About Us
            </h2>
            <br />
            <p className="text-white text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 pt-4 text-white">
              <div className="flex">
                <div>
                  <h3 className="font-bold text-lg">1.</h3>
                  <h3 className="font-bold text-lg">Vision</h3>
                  <p className="text-sm pt-2 pb-4">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                  </p>
                </div>
              </div>

              <div className="flex">
                <div>
                  <h3 className="font-bold text-lg">2.</h3>
                  <h3 className="font-bold text-lg">Mission</h3>
                  <p className="text-sm pt-2 pb-4">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                  </p>
                </div>
              </div>
              <div className="flex">
                <div>
                  <h3 className="font-bold text-lg">3.</h3>
                  <h3 className="font-bold text-lg">Values</h3>
                  <p className="text-sm pt-2 pb-4">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <img className="w-full" src={About} alt="/" />
          </div>
        </div>
      </div>

      {/* testimonial section */}
      <div className="mb-8 mt-8 text-center font-poppins">
        <h2 className="text-4xl font-bold text-black">Client Testimonials</h2>
        <p className="text-lg mt-4 text-lightBlack text-center m-auto w-2/4	">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis.
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-x-2">
        <div className="p-8 mx-8 text-gray-800 rounded-lg shadow-3xl">
          <div className="mb-2">
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <h5 className="font-bold text-black">Okori Inyene</h5>
              <p className="text-sm text-gray-600">Customer</p>
              <br />
            </div>
            <p className="mb-2 text-center text-gray text-sm">
              " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
              duo dolores et ea rebum. Stet clita. "
            </p>
          </div>
        </div>
        <div className="p-8 mx-8 text-gray-800 rounded-lg shadow-3xl">
          <div className="mb-2">
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <h5 className="font-bold text-black">Austin Medina</h5>
              <p className="text-sm text-gray-600">Customer</p>
              <br />
            </div>
            <p className="mb-2 text-center text-gray-600 text-sm">
              " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
              duo dolores et ea rebum. Stet clita. "
            </p>
          </div>
        </div>
        <div className="p-8 mx-8 text-gray-800 rounded-lg shadow-3xl">
          <div className="mb-2">
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <h5 className="font-bold text-black">Okori Inyene</h5>
              <p className="text-sm text-gray-600">Customer</p>
              <br />
            </div>
            <p className="mb-2 text-center text-gray-600 text-sm">
              " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
              duo dolores et ea rebum. Stet clita. "
            </p>
          </div>
        </div>
      </div>

      {/* contact section */}

      <div className="bg-gray-800 text-gray-100 px-4 py-4">
        <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg ">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl lg:text-3xl font-bold text-footer leading-tight">
                Solustack
              </h2>
              <h3 className="text-3xl lg:text-3xl font-semibold text-black leading-tight">
                Lets Handle Your Next Project
              </h3>
              <br />

              <p className="text-black text-sm font-bold leading-tight">
                Direct Channels
              </p>
              <br />

              <p className="text-black text-sm ">+509 1234 5678</p>
              <p className="text-black text-sm ">support@solustack.com</p>
              <br />
              <div>
                <p className="text-black text-sm font-bold leading-tight">
                  Social Media
                </p>
              </div>
            </div>
            <div className="mt-8 text-center"></div>
          </div>

          {/* contact form  */}
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  class="appearance-none block w-full text-gray-700 bg-formGray placeholder-black  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Your Name*"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <input
                  class="appearance-none block w-full  bg-formGray placeholder-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="email"
                  placeholder="Your Email*"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <input
                  class="appearance-none block w-full bg-formGray text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-black"
                  id="email"
                  type="text"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div>
              <button className=" bg-buttonBlack py-2 px-4 mr-2 rounded text-white">
                ios
              </button>
              <button className=" bg-buttonBlack py-2 px-4 mr-2 rounded text-white">
                Android
              </button>
              <button className=" bg-buttonBlack py-2 px-4 mr-2 rounded text-white">
                UI/UX Design
              </button>
            </div>
            <br />
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <textarea
                  class=" no-resize appearance-none block w-full bg-formGray placeholder-black text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3">
                <button
                  class="shadow bg-footer hover:bg-footer-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Submit
                </button>
              </div>
              <div class="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default about;
