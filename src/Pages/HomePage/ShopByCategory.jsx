import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Rating from "react-rating";

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
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text:md md:text-3xl text-yellow-300 font-bold md:my-6 my-4 text-center">
        Shop by Category
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-4">
            {allToys &&
              allToys?.slice(0, 6).map((toy) => {
                return (
                  <div
                    className="card glass w-full bg-base-100 rounded-md shadow-md"
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
                      <h2 className="card-title">
                        {toy.toyname}
                        <div className="badge badge-secondary text-[8px] bg-white border-1 text-gray-800 ">
                          NEW
                        </div>
                      </h2>
                      <p className="text-green-600 font-bold">
                        {" "}
                        Price: {toy.toyprice}$
                      </p>
                      <div className="card-actions flex justify-between items-center">
                        <div className=" py-3">
                          {"  "}
                          <Rating
                            className="ml-1 text-green-500 "
                            initialRating={toy.ratings}
                            readonly
                            emptySymbol={<i className="far fa-star"></i>}
                            fullSymbol={<i className="fas fa-star"></i>}
                          />{" "}
                        </div>
                        <Link
                          to={user ? `/viewdetails/${toy._id}` : "#"}
                          className={`btn btn-sm bg-yellow-300 text-gray-700 border-0 hover:bg-yellow-400`}
                          onClick={() => {
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
                          }}
                        >
                          View details
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
                          to={user ? `/viewdetails/${toy._id}` : "#"}
                          className={`btn btn-sm bg-yellow-300 text-gray-700 border-0 hover:bg-yellow-400`}
                          onClick={() => {
                            if (!user) {
                              Swal.fire(
                                "No Access!",
                                "You need to login first to view details",
                                "error"
                              );
                            }
                          }}
                        >
                          View details
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
                          to={user ? `/viewdetails/${toy._id}` : "#"}
                          className={`btn btn-sm bg-yellow-300 text-gray-700 border-0 hover:bg-yellow-400`}
                          onClick={() => {
                            if (!user) {
                              Swal.fire(
                                "No Access!",
                                "You need to login first to view details",
                                "error"
                              );
                            }
                          }}
                        >
                          View details
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
                          to={user ? `/viewdetails/${toy._id}` : "#"}
                          className={`btn btn-sm bg-yellow-300 text-gray-700 border-0 hover:bg-yellow-400`}
                          onClick={() => {
                            if (!user) {
                              Swal.fire(
                                "No Access!",
                                "You need to login first to view details",
                                "error"
                              );
                            }
                          }}
                        >
                          View details
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
                          to={user ? `/viewdetails/${toy._id}` : "#"}
                          className={`btn btn-sm bg-yellow-300 text-gray-700 border-0 hover:bg-yellow-400`}
                          onClick={() => {
                            if (!user) {
                              Swal.fire(
                                "No Access!",
                                "You need to login first to view details",
                                "error"
                              );
                            }
                          }}
                        >
                          View details
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
