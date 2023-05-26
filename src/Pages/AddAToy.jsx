import React, { useContext } from "react";
import Navbar from "../SharedComponent/Navbar";
import { AuthContext } from "../Providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import useTitle from "../Hooks/useTitle";

const AddAToy = () => {
  useTitle("Add toy");
  const { user } = useContext(AuthContext);
  const handleAddToy = (e) => {
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
    const newToy = {
      toyname: toyname,
      toyprice: parseFloat(toyprice),
      toydescription: toydescription,
      toyphoto: toyphoto,
      selleremail: selleremail,
      category: category,
      ratings: ratings,
      sellername: sellername,
      quantity: quantity,
    };
    fetch("https://toy-marketplace-server-two-eta.vercel.app/toysCollection", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          toast.success(`Toy added successfully!`);
        }
        form.reset();
      });
  };
  return (
    <div>
      <Toaster />

      <Navbar></Navbar>
      {user && (
        <form onSubmit={handleAddToy} className="p-10">
          <h2 className="md:my-6 my-3 text-center md:text-4xl text-md text-yellow-300 font-bold">
            Make a toy listed
          </h2>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Toy name
              </label>
              <input
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
                required
                defaultValue={"Choose a Category"}
                name="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected disabled>
                  Choose a Category
                </option>
                <option value="dcUnivers">DC Universe</option>
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
                defaultValue={user?.displayName}
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
                type="email"
                name="email"
                readOnly
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
                type="text"
                name="photourl"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Photo.jpg"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Price $
              </label>
              <input
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
              Description (Optional)
            </label>
            <input
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
            Click to add
          </button>
        </form>
      )}
    </div>
  );
};

export default AddAToy;
