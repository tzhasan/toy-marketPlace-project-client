import React, { useContext, useState } from "react";
import Navbar from "../SharedComponent/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import useTitle from "../Hooks/useTitle";

const LoginPage = () => {
  useTitle('Login')
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const { signIn, googleLogIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    setError("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        toast.success("Logged in Successful!");
        form.reset();
      })
      .catch((error) => {
        setError("Email/Password dosn't match!");
      });
  };
  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        toast.success("Logged in Successful!");
        navigate(from, { replace: true });

      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div>
        <Toaster />
      </div>
      <Navbar></Navbar>

      <form onSubmit={handleLogin} className="w-[80%] mx-auto mt-20 mb-10">
        <h1 className="text-2xl md:4xl font-bold text-center my-10">
          Login here
        </h1>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            name="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@email.com"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password
          </label>
          <input
            type="password"
            name="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="my-2 text-sm">
          <p className="text-red-600">{error}</p>
        </div>

        <button
          type="submit"
          className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>

        <div className="my-4 text-sm font-medium text-gray-900 dark:text-gray-300">
          New here ?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            Go for create account!
          </Link>
        </div>
      </form>
      <div className="w-[80%] mx-auto mt-6 mb-16">
        <div className="divider">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn bg-slate-600 w-full my-4"
        >
          {" "}
          <FcGoogle className="mr-2 text-3xl"></FcGoogle> Sign in With Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
