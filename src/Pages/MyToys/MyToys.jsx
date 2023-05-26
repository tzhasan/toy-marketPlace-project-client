import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../SharedComponent/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";
import { FcEditImage } from "react-icons/fc";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import Loading from "../../SharedComponent/Loading";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");
  const { user, loading } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [asc, setAsc] = useState(true);
  useEffect(() => {
    if (user && !loading) {
      fetch(
        `https://toy-marketplace-server-two-eta.vercel.app/MytoysCollection/${
          asc ? "asc" : "desc"
        }?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setToys(data);
        });
    }
  }, [user, loading, asc]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://toy-marketplace-server-two-eta.vercel.app/deleteFromToyCollection/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remainingToys = toys.filter((toy) => toy._id !== id);
            setToys(remainingToys);
            console.log(data);
          });
      }
    });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex flex-col items-center ">
      <Navbar></Navbar>

      <div className="relative overflow-x-auto shadow-md w-full my-10 space-y-4">
        <h2 className="text-center text-3xl text-yellow-300 mt-4 font-bold">
          My Items
        </h2>
        <button
          onClick={() => setAsc(!asc)}
          className="btn btn-sm bg-yellow-300 hover:bg-yellow-300 border-0 text-gray-700 ml-2"
        >
          {asc ? "High Price" : "Low Price"}
        </button>

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 w-[5%] py-3  dark:bg-gray-800">
                No
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
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, i) => (
              <tr
                key={toy._id}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                >
                  {i + 1}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800"
                >
                  {toy.toyname}
                </th>
                <td className="px-6 py-4">{toy.category}</td>
                <td className="px-6 py-4 bg-gray-100 dark:bg-gray-800">
                  {toy.sellername}
                </td>
                <td className="px-6 py-4">{toy.toyprice}</td>
                <td className="px-6 py-4 bg-gray-100 dark:bg-gray-800">
                  {toy.quantity}
                </td>
                <td className="px-6 py-4 space-x-1">
                  <Link to={`/mytoys/${toy._id}`}>
                    <button className="btn btn-sm bg-transparent hover:bg-gray-300  border-0 text-3xl">
                      <FcEditImage></FcEditImage>
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="btn btn-sm bg-transparent hover:bg-gray-300  border-0 text-3xl text-black"
                  >
                    <MdDeleteSweep></MdDeleteSweep>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster />
    </div>
  );
};

export default MyToys;
