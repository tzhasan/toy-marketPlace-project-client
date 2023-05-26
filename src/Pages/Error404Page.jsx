import React from 'react';
import useTitle from '../Hooks/useTitle';
import Lottie from "react-lottie";
import animationData from "../../src/assets/9195-error.json";
import { Link } from 'react-router-dom';
const Error404Page = () => {
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
  useTitle('Page Not Found')

  return (
    <div className='text-center'>
      <Lottie options={defaultOptions} height={600} width={600} />
      <Link to={"/"} >
        {" "}
        <button className='btn bg-yellow-300 hover:bg-yellow-400 border-2  text-gray-600 w-2/12 mx-auto text-center'>Go back to Home</button>{" "}
      </Link>
    </div>
  );
};

export default Error404Page;