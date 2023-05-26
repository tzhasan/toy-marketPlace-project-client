import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../SharedComponent/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditToys = () => {
  const { user, loading } = useContext(AuthContext);
  const [toy, setToy] = useState([]);
  const { id } = useParams();
  const [reRender, setRender] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && user) {
      fetch(`https://toy-marketplace-server-two-eta.vercel.app/singleToy/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("id data", data);
          setToy(data);
        });
    }
  }, [loading, user, reRender]);

  //
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyname = form.toyname.value;
    const toyprice = form.price.value;
    const toydescription = form.description.value;
    const toyphoto = form.photourl.value;
    const selleremail = form.email.value;
    const category = form.category.value;
    const ratings = form.ratings.value;
    const sellername = form.sellername.value;
    const quantity = form.quantity.value;
    const UpdatedToy = {
      toyname: toyname,
      toyprice: toyprice,
      toydescription: toydescription,
      toyphoto: toyphoto,
      category: category,
      ratings: ratings,
      sellername: sellername,
      quantity: quantity,
    };
    if (toy) {
      fetch(
        `https://toy-marketplace-server-two-eta.vercel.app/updateToys/${toy._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(UpdatedToy),
        }
      )
        .then((res) => res.json())
        .then((result) => {
          setRender(!reRender);
          if (result.modifiedCount) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Your update has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          navigate("/mytoys");
          form.reset();
        });
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      {user && (
        <form onSubmit={handleUpdate} className="p-10">
          <h2 className="md:my-6 my-3 text-center md:text-4xl text-md text-yellow-300 font-bold">
            Update Data for Toys
          </h2>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Toy name
              </label>
              <input
                defaultValue={toy.toyname}
                type="text"
                name="toyname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Spider Man"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Category
              </label>
              <select
                defaultValue={toy.category}
                required
                name="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected disabled value="">
                  Choose a Category
                </option>
                <option value="dcUnivers">DC Univers</option>
                <option value="starwars">STAR WARS</option>
                <option value="transformers">TRANSFORMERS</option>
                <option value="avengers">AVENGERS</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Seller Name
              </label>
              <input
                type="text"
                name="sellername"
                defaultValue={toy.sellername}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Legends"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Seller Email
              </label>
              <input
                readOnly
                type="email"
                name="email"
                defaultValue={user?.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="seller@gmail.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Toys Photo URL
              </label>
              <input
                defaultValue={toy.toyphoto}
                type="text"
                name="photourl"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="legends_logo.jpg"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Price $
              </label>
              <input
                defaultValue={toy.toyprice}
                type="number"
                name="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="$20"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Available Quantity
              </label>
              <input
                defaultValue={toy.quantity}
                type="number"
                name="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="100 pieces"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Ratings
              </label>
              <input
                defaultValue={toy.ratings}
                type="number"
                name="ratings"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="5 stars"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <input
              defaultValue={toy.toydescription}
              type="text"
              name="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="The Spiderman action figure toy brings the beloved web-slinger to life in your hands..."
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full mt-6  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update
          </button>
        </form>
      )}
    </div>
  );
};

export default EditToys;
