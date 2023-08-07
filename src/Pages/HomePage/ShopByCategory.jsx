import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Rating from "react-rating";
import AOS from "aos";
import "aos/dist/aos.css";

import "react-tabs/style/react-tabs.css";
import Loading from "../../SharedComponent/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [allToys, setAllToys] = useState([]);
  const { user, loading } = useContext(AuthContext);
  const [category, setCategory] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading) {
      fetch(
        `https://toy-marketplace-server-two-eta.vercel.app/toysCollectionAll`
      )
        .then((res) => res.json())
        .then((data) => {
          setAllToys(data);
        });
    }
  }, [loading, user, category]);
  useEffect(() => {
    if (!loading) {
      fetch(
        `https://toy-marketplace-server-two-eta.vercel.app/toysCollectionByCategory?category=${category}`
      )
        .then((res) => res.json())
        .then((data) => {
          setToys(data);
        });
    }
  }, [loading, user, category]);

  const tab = (catagory) => {
    setCategory(catagory);
    setToys(toys);
  };
  const handleNoUserAlert = () => {
    if (!user) {
      Swal.fire(
        "No Access!",
        "You need to login first to view details",
        "error"
      );
      navigate("/login", {
        state: { from: location },
        replace: true,
      });
    }
  }
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  if (loading) {
    return <Loading></Loading>;
  }
  console.log(allToys);
  return (
    <div>
      <h2 className="text:md md:text-3xl text-yellow-300 font-bold md:my-6 my-4 text-center">
        SHOP BY CATEGORY
      </h2>
      <Tabs className="w-[90%] mx-auto ">
        <TabList>
          <Tab>All Toys</Tab>
          <Tab onClick={() => tab("dcUnivers")}>DC Univers</Tab>
          <Tab onClick={() => tab("starwars")}>Star Wars</Tab>
          <Tab onClick={() => tab("transformers")}>Transformers</Tab>
          <Tab onClick={() => tab("avengers")}>Avengers</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {allToys &&
              allToys?.slice(0, 6).map((toy) => {
                return (
                  <div
                    data-aos="zoom-in"
                    key={toy._id}
                    className=" p-4"
                    bis_skin_checked={1}
                  >
                    <div
                      className="bg-gray-100 p-6 rounded-lg"
                      bis_skin_checked={1}
                    >
                      <img
                        className="h-40 rounded w-full object-cover object-center mb-6"
                        src={toy.toyphoto}
                        alt="content"
                      />
                      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                        NEW
                      </h3>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                        {toy.toyname}
                      </h2>
                      <div className="leading-relaxed text-base flex justify-between">
                        <div className="">
                          <h5>Price: {toy.toyprice} $</h5>
                          <Rating
                            className=" text-yellow-300 "
                            initialRating={toy.ratings}
                            readonly
                            emptySymbol={<i className="far fa-star"></i>}
                            fullSymbol={<i className="fas fa-star"></i>}
                          />
                        </div>
                        <div>
                          <Link
                            onClick={() => handleNoUserAlert()}
                            to={user ? `/viewdetails/${toy._id}` : "#"}
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
                            <span className="relative">View</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-6 my-4">
            {toys &&
              toys?.map((toy) => {
                return (
                  <div
                    className="card w-full bg-base-100 rounded-md shadow-md"
                    key={toy._id}
                  >
                    <figure>
                      <img
                        className="w-full h-52 "
                        src={toy.toyphoto}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{toy.toyname}</h2>
                      <p className="text-green-600 font-bold">
                        {" "}
                        Price: {toy.toyprice}$
                      </p>
                      <div className="card-actions flex justify-between items-center">
                        <div className=" py-3">
                          {"  "}
                          <Rating
                            className="ml-1 text-green-500"
                            initialRating={toy.ratings}
                            readonly
                            emptySymbol={<i className="far fa-star"></i>}
                            fullSymbol={<i className="fas fa-star"></i>}
                          />{" "}
                        </div>
                        <Link
                          onClick={() => handleNoUserAlert()}
                          to={user ? `/viewdetails/${toy._id}` : "#"}
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
                          <span className="relative">View</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-6 my-4">
            {toys &&
              toys?.map((toy) => {
                return (
                  <div
                    className="card w-full bg-base-100 rounded-md shadow-md"
                    key={toy._id}
                  >
                    <figure>
                      <img
                        className="w-full h-52 "
                        src={toy.toyphoto}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{toy.toyname}</h2>
                      <p className="text-green-600 font-bold">
                        {" "}
                        Price: {toy.toyprice}$
                      </p>
                      <div className="card-actions flex justify-between items-center">
                        <div className=" py-3">
                          {"  "}
                          <Rating
                            className="ml-1 text-green-500"
                            initialRating={toy.ratings}
                            readonly
                            emptySymbol={<i className="far fa-star"></i>}
                            fullSymbol={<i className="fas fa-star"></i>}
                          />{" "}
                        </div>
                        <Link
                          onClick={() => handleNoUserAlert()}
                          to={user ? `/viewdetails/${toy._id}` : "#"}
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
                          <span className="relative">View</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-6 my-4">
            {toys &&
              toys?.map((toy) => {
                return (
                  <div
                    className="card w-full bg-base-100 rounded-md shadow-md"
                    key={toy._id}
                  >
                    <figure>
                      <img
                        className="w-full h-52 "
                        src={toy.toyphoto}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{toy.toyname}</h2>
                      <p className="text-green-600 font-bold">
                        {" "}
                        Price: {toy.toyprice}$
                      </p>
                      <div className="card-actions flex justify-between items-center">
                        <div className=" py-3">
                          {"  "}
                          <Rating
                            className="ml-1 text-green-500"
                            initialRating={toy.ratings}
                            readonly
                            emptySymbol={<i className="far fa-star"></i>}
                            fullSymbol={<i className="fas fa-star"></i>}
                          />{" "}
                        </div>
                        <Link
                          onClick={() => handleNoUserAlert()}
                          to={user ? `/viewdetails/${toy._id}` : "#"}
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
                          <span className="relative">View</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-6 my-4">
            {toys &&
              toys?.map((toy) => {
                return (
                  <div
                    className="card w-full bg-base-100 rounded-md shadow-md"
                    key={toy._id}
                  >
                    <figure>
                      <img
                        className="w-full h-52 "
                        src={toy.toyphoto}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{toy.toyname}</h2>
                      <p className="text-green-600 font-bold">
                        {" "}
                        Price: {toy.toyprice}$
                      </p>
                      <div className="card-actions flex justify-between items-center">
                        <div className=" py-3">
                          {"  "}
                          <Rating
                            className="ml-1 text-green-500"
                            initialRating={toy.ratings}
                            readonly
                            emptySymbol={<i className="far fa-star"></i>}
                            fullSymbol={<i className="fas fa-star"></i>}
                          />{" "}
                        </div>
                        <Link
                          onClick={() => handleNoUserAlert()}
                          to={user ? `/viewdetails/${toy._id}` : "#"}
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
                          <span className="relative">View</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
