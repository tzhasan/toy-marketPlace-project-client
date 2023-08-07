import React, { useContext, useState } from "react";
import logo from "../assets/icons/superhero.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const signingOut = () => {
    logOut();
  };
  console.log(user);
  return (
    <div className="navbar bg-gray-800 bg-opacity-80 md:sticky md:top-0 md:z-50">
      <div className="navbar-start md:mx-10 mx-2">
        <div className="dropdown">
          <label
            onClick={toggleMenu}
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke='white'
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-compact dropdown-content mt-3 p-2 shadow text-white rounded-box w-52 bg-gray-400 ${
              isMenuOpen ? "" : "hidden"
            }`}
          >
            <li className="hover:text-yellow-300">
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 hover:bg-transparent"
                    : "active:bg-transparent hover:bg-transparent"
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>

            <li className="hover:text-yellow-300">
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 hover:bg-transparent"
                    : "active:bg-transparent hover:bg-transparent"
                }
                to={"/alltoys"}
              >
                All Toys
              </NavLink>
            </li>
            {user && (
              <li className="hover:text-yellow-300">
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-300 hover:bg-transparent"
                      : "active:bg-transparent hover:bg-transparent"
                  }
                  to={"/mytoys"}
                >
                  My Toys
                </NavLink>
              </li>
            )}
            {user && (
              <li className="hover:text-yellow-300">
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-300 hover:bg-transparent"
                      : "active:bg-transparent hover:bg-transparent"
                  }
                  to={"/addatoy"}
                >
                  Add a Toy
                </NavLink>
              </li>
            )}
            <li className="hover:text-yellow-300">
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 hover:bg-transparent"
                    : "active:bg-transparent hover:bg-transparent"
                }
                to={"/contactus"}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <img className="w-[8%] ml-2" src={logo} alt="" /> */}
        <a className="btn btn-ghost normal-case text-md md:text-2xl  text-yellow-300">
          Legends
        </a>
      </div>
      {/* Large screen manu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white  text-lg  ">
          <li className="hover:text-yellow-300">
            <NavLink
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 hover:bg-transparent"
                  : "active:bg-transparent hover:bg-transparent"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>

          <li className="hover:text-yellow-300">
            <NavLink
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 hover:bg-transparent"
                  : "active:bg-transparent hover:bg-transparent"
              }
              to={"/alltoys"}
            >
              All Toys
            </NavLink>
          </li>
          {user && (
            <li className="hover:text-yellow-300">
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 hover:bg-transparent"
                    : "active:bg-transparent hover:bg-transparent"
                }
                to={"/mytoys"}
              >
                My Toys
              </NavLink>
            </li>
          )}
          {user && (
            <li className="hover:text-yellow-300">
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 hover:bg-transparent"
                    : "active:bg-transparent hover:bg-transparent"
                }
                to={"/addatoy"}
              >
                Add a Toy
              </NavLink>
            </li>
          )}
          <li className="hover:text-yellow-300">
            <NavLink
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 hover:bg-transparent"
                  : "active:bg-transparent hover:bg-transparent"
              }
              to={"/contactus"}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Large screen manu */}

      {/* Profile photo and login logout */}
      <div className="navbar-end ">
        {user && (
          <div
            data-tip={user?.displayName}
            className="avatar tooltip tooltip-bottom tooltip-accent"
          >
            <div className="md:w-12 w-8 rounded-full  mr-2 ">
              {user?.photoURL ? (
                <img
                  className="w-[50%] "
                  title={user.displayName}
                  src={user.photoURL}
                  alt={user.email}
                />
              ) : (
                <div
                  // title={user.displayName}
                  className="md:text-6xl text-3xl text-gray-300 "
                >
                  <CgProfile></CgProfile>
                </div>
              )}
            </div>
          </div>
        )}
        {user ? (
          <button
            onClick={signingOut}
            className="relative inline-flex items-center md:px-8 px-6 py-3 overflow-hidden md:text-md text-sm font-medium text-black border-2 border-yellow-300 rounded-full hover:text-black group hover:bg-gray-50 bg-white"
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
            <span className="relative">Log Out</span>
          </button>
        ) : (
          <Link
            to="/login"
            className="relative inline-flex items-center md:px-10 px-8 py-3 overflow-hidden md:text-md text-sm font-medium text-black border-2 border-yellow-300 rounded-full hover:text-black group hover:bg-gray-50 bg-white"
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
            <span className="relative">Log in</span>
          </Link>
        )}
      </div>
      {/* Profile photo and login logout */}
    </div>
  );
};

export default Navbar;

