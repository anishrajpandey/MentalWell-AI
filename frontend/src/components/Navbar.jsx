import React from "react";
// import logo from "/logo.png";
import { Link } from "react-router-dom";
// import {}

import Signup from "../components/Signup";

import Login from "../components/Login";
import checkAuthentication from "../utils/checkAuthentication";
import { Button } from "@mui/material";

const Navbar = () => {
  function handleLogout() {
    localStorage.setItem("UserData", JSON.stringify({ verified: false }));
    window.location.reload();
  }
  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center ml-0">
            <img src="/logo.png" className="h-16 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap"></span>
          </Link>
          {!checkAuthentication() ? (
            <div className="flex md:order-2">
              <button
                type="button"
                className="text-black bg-white-700  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-3"
              >
                <Login />
              </button>

              <button
                type="button"
                className="text-white bg-secondaryBlue focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
              >
                <Signup />
              </button>

              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200-400-gray-700-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex md:order-2">
              <Button variant="contained" color="error" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          )}

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white  ">
              <Link
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
                to={"/"}
              >
                Home
              </Link>
              <Link
                to="/forum"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500-gray-700-white md:dark:hover:bg-transparent-700"
              >
                Forum
              </Link>
              {JSON.parse(localStorage.getItem("UserData"))?.therapist
                ?.userType === "therapist" && (
                <Link
                  to="/getUsers"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500-gray-700-white md:dark:hover:bg-transparent-700"
                >
                  Connect with Patients
                </Link>
              )}{" "}
              {JSON.parse(localStorage.getItem("UserData"))?.user?.userType ===
                "user" && (
                <Link
                  to="/findtherapist"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500-gray-700-white md:dark:hover:bg-transparent-700"
                >
                  Find Therapists
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
