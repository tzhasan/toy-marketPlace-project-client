import React, { useEffect } from 'react';
import Navbar from '../SharedComponent/Navbar';
import useTitle from '../Hooks/useTitle';
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useTitle('ContactUs')

 useEffect(() => {
   AOS.init({ duration: 1000 });
 }, []);
  return (
    <div>
      <Navbar></Navbar>
      <section className="text-gray-400  body-font relative">
        <div className="container px-5 py-24 mx-auto" bis_skin_checked={1}>
          <div
            className="flex flex-col text-center w-full mb-12"
            bis_skin_checked={1}
          >
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Welcome to our Contact Us page, designed to bridge the gap between
              your questions, feedback, and our commitment to exceptional
              service. Whether you're seeking answers, sharing thoughts, or
              simply want to engage, this is your direct line to us.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto" bis_skin_checked={1}>
            <div className="flex flex-wrap -m-2" bis_skin_checked={1}>
              <div className="p-2 w-1/2" bis_skin_checked={1}>
                <div className="relative" bis_skin_checked={1}>
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-500 bg-opacity-40 rounded border border-yellow-300 focus:border-yellow-400 focus:bg-gray-300 focus:ring-2 focus:ring-yellow-400 text-base outline-none text-gray-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2" bis_skin_checked={1}>
                <div className="relative" bis_skin_checked={1}>
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-500 bg-opacity-40 rounded border border-yellow-300 focus:border-yellow-400 focus:bg-gray-300 focus:ring-2 focus:ring-yellow-400 text-base outline-none text-gray-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full" bis_skin_checked={1}>
                <div className="relative" bis_skin_checked={1}>
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-500 bg-opacity-40 rounded border border-yellow-300 focus:border-yellow-400 focus:bg-gray-300 focus:ring-2 focus:ring-yellow-400 h-32 text-base outline-none text-gray-600 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="p-2 w-full" bis_skin_checked={1}>
                <button
                  type="submit"
                  className="relative inline-flex items-center md:px-10 px-8 py-3 overflow-hidden md:text-md text-sm font-medium text-gray-500 border-2 border-yellow-300 rounded-full hover:text-black group hover:bg-gray-50"
                >
                  <span className="absolute left-0 block w-full h-0 transition-all bg-yellow-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease" />
                  <span className="absolute right-0 flex items-center justify-start md:w-10 md:h-10 w-8 h-8 duration-300 transform translate-x-full group-hover:translate-x-2 md:group-hover:translate-x-2 ease">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                  <span className="relative">Send</span>
                </button>
              </div>
              <div
                className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center"
                bis_skin_checked={1}
              >
                <a className="text-indigo-400">sohantajbiul210@gmail.com</a>
                <p className="leading-normal my-5">
                  Abu shagara
                  <br />
                  Sharjah, UAE
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;