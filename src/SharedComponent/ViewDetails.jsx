import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from "./Navbar";

const ViewDetails = () => {
  const { user, loading } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (!loading && user) {
      fetch(`https://toy-marketplace-server-two-eta.vercel.app/singleToy/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setToys(data);
        });
    }
  }, [loading, user]);
  console.log(toys);
  if (loading) {
    <Loading></Loading>;
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-gray-300">
        <div className="hero-content flex-col lg:flex-row">
          <img className="max-w-sm rounded-lg shadow-2xl" src={toys.toyphoto} />
          <div>
            <h1 className="text-2xl md:text-5xl font-bold text-gray-700">
              {toys.toyname}
            </h1>
            <p>
              {" "}
              <span className="font-bold text-gray-700">Category:</span>{" "}
              {toys.category}
            </p>
            <p className="py-6">{toys.toydescription}</p>
            <p className="text-green-500 font-bold">Price: {toys.toyprice} $</p>
            <p className="my-2">
              {" "}
              <span className="font-bold">Stock Available:</span>{" "}
              {toys.quantity} pieces
            </p>
            <p className="my-2">
              {" "}
              <span className="font-bold">Seller Name:</span> {toys.sellername}
            </p>
            <p className="my-2">
              {" "}
              <span className="font-bold">Seller Email:</span>{" "}
              {toys.selleremail}
            </p>
            <Link
              to={"/"}
              className="btn rounded-lg px-2  md:px-4  bg-yellow-300 hover:bg-yellow-500 border-0 text-gray-600 text-xs md:text-lg"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
