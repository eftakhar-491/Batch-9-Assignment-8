import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [phnMenu, setPhnMenu] = useState(false);
  return (
    <>
      <nav className="py-4 w-11/12 mx-auto lg:w-4/5 flex justify-between items-center ">
        <h1 className="flex items-center text-xl lg:text-2xl font-extrabold font-PD">
          <img
            onClick={() => setPhnMenu((pre) => !pre)}
            className="md:hidden block w-7 cursor-pointer  mr-2 hover:bg-slate-200 p-1 rounded-full"
            src="./menu.png"
            alt=""
          />
          Book Vibe
        </h1>
        <div
          className={`absolute top-16 md:static ${
            phnMenu ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:items-center gap-y-2 gap-x-4`}
        >
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return isActive
                ? `text-white bg-green-500 px-4 py-1 border-2 border-green-500 rounded-md font-bold text-sm`
                : `px-4 py-1 border-2 border-green-500 rounded-md font-bold text-sm`;
            }}
          >
            Home
          </NavLink>
          <NavLink
            to={"/Listed-Books"}
            className={({ isActive }) => {
              return isActive
                ? `text-white bg-green-500 px-4 py-1 border-2 border-green-500 rounded-md font-bold text-sm`
                : `px-4 py-1 border-2 border-green-500 rounded-md font-bold text-sm`;
            }}
          >
            Listed Books
          </NavLink>
          <NavLink
            to={"/dashbord"}
            className={({ isActive }) => {
              return isActive
                ? `text-white bg-green-500 px-4 py-1 border-2 border-green-500 rounded-md font-bold text-sm`
                : `px-4 py-1 border-2 border-green-500 rounded-md font-bold text-sm`;
            }}
          >
            Dash Bord
          </NavLink>
        </div>
        <div className="flex items-center gap-1 lg:gap-3">
          <button className="lg:px-4 px-3 py-1 lg:py-2 bg-green-500 text-white font-semibold text-sm rounded-md ">
            Sign In
          </button>
          <button className="lg:px-4 px-3 py-1 lg:py-2 bg-[#59C6D2] text-white font-semibold text-sm rounded-md ">
            Sign Up
          </button>
        </div>
      </nav>
    </>
  );
}
