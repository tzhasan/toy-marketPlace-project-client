import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../SharedComponent/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Rating from "react-rating";
import Loading from "../../SharedComponent/Loading";
import useTitle from "../../Hooks/useTitle";

const AllToys = () => {
  useTitle("All Toys");
  const [toys, setToys] = useState([]);
  const { user, loading } = useContext(AuthContext);
  const [modalData, setModalData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const {
    toyname,
    toyprice,
    toydescription,
    toyphoto,
    category,
    quantity,
    ratings,
    sellername,
    selleremail,
  } = modalData;

  const handleSearch = () => {
    fetch(`https://toy-marketplace-server-two-eta.vercel.app/toySearch/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        console.log(data);
      });
  };

  useEffect(() => {
    if (!loading) {
      fetch(`https://toy-marketplace-server-two-eta.vercel.app/toysCollectionAll`)
        .then((res) => res.json())
        .then((data) => {
          setToys(data);
        });
    }
  }, [loading, user]);

  const handleModal = (id) => {
    if (!user) {
      navigate("/login", { state: { from: location }, replace: true });
    }

    fetch(`https://toy-marketplace-server-two-eta.vercel.app/singleToy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setModalData(data);
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex flex-col items-center ">
      <Navbar></Navbar>

      <div className="relative overflow-x-auto shadow-md w-full my-10">
        {/* table */}
        <div className="flex items-center justify-between mx-auto w-[98%]">
          <h2 className="text-center md:text-3xl text-lg text-yellow-300 my-4 font-bold">
            All Items will Appeare here
          </h2>
          <div>
            <div className="input-group">
              <input
                onChange={(e) => setSearchText(e.target.value)}
                type="text"
                name="name"
                placeholder="Spider Man / Avengers"
                className="input input-bordered"
              />
              <button
                onClick={handleSearch}
                className="btn btn-square bg-green-500 border-0  hover:bg-green-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* table */}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 w-[5%] py-3  dark:bg-gray-800">
                No
              </th>
              <th scope="col" className="px-6 w-[5%] py-3  dark:bg-gray-800">
                Photo
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800"
              >
                Toy name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800"
              >
                Seller Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800"
              >
                Available Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, i) => (
              <tr
                key={toy._id}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                >
                  {i + 1}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800 avatar"
                >
                  <div className="w-16 rounded-full border-2 border-black">
                    <img src={toy.toyphoto} />
                  </div>
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800"
                >
                  {toy.toyname}
                </td>
                <td className="px-6 py-4">{toy.category}</td>
                <td className="px-6 py-4 bg-gray-100 dark:bg-gray-800">
                  {toy.sellername}
                </td>
                <td className="px-6 py-4">{toy.toyprice}</td>
                <td className="px-6 py-4 bg-gray-100 dark:bg-gray-800">
                  {toy.quantity}
                </td>
                <td className="px-6 py-4">
                  <label
                    onClick={() => {
                      handleModal(toy._id);
                    }}
                    htmlFor="my-modal-5"
                    className="btn btn-sm bg-yellow-300 hover:bg-yellow-500 border-0 text-gray-600"
                  >
                    View Details
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Put this part before </body> tag */}
      {user && (
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      )}
      <div className="modal ">
        <div className="modal-box w-11/12 max-w-6xl bg-gray-800 bg-opacity-90 ">
          <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row-reverse text-white  w-[80%]">
              <img src={toyphoto} className="max-w-sm rounded-lg shadow-2xl " />
              <div>
                <h1 className="md:text-5xl text-2xl mb-2 md:mb-6 font-bold text-yellow-300">
                  {toyname}
                </h1>
                <p className="py-2 font-bold text-green-400 text-2xl">
                  {" "}
                  Price:
                  {toyprice} $
                </p>
                <p className="text-yellow-400 text-xl">
                  <Rating
                    className="ml-1"
                    initialRating={ratings}
                    readonly
                    emptySymbol={<i className="far fa-star"></i>}
                    fullSymbol={<i className="fas fa-star"></i>}
                  />
                </p>

                <p className="py-2 text-sm md:text-lg">
                  {" "}
                  <span className="font-semibold"> Category:</span> {category}
                </p>
                <p className="py-2 text-sm md:text-lg">
                  {" "}
                  <span className="font-semibold"> Seller Name:</span>{" "}
                  {sellername}
                </p>
                <p className="py-2 text-sm md:text-lg">
                  {" "}
                  <span className="font-semibold"> Seller email:</span>{" "}
                  {selleremail}
                </p>
                <p className="py-2 text-sm md:text-lg">
                  {" "}
                  <span className="font-semibold">
                    {" "}
                    Available Quantity:
                  </span>{" "}
                  {quantity} Pieces
                </p>
                <p className="py-2 text-sm md:text-lg">
                  {" "}
                  <span className="font-semibold"> Description:</span>{" "}
                  {toydescription}
                </p>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <label
              htmlFor="my-modal-5"
              className="btn text-gray-700 bg-yellow-300 hover:bg-yellow-400"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
