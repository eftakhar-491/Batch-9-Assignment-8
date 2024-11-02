import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="py-4 w-11/12 mx-auto lg:w-4/5 flex justify-between items-center ">
        <h1 className="text-2xl font-extrabold font-PD">Book Vibe</h1>
        <div className="flex items-center gap-4">
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
            to={"/Pages-to-Read"}
            className={({ isActive }) => {
              return isActive
                ? `text-white bg-green-500 px-4 py-1 border-2 border-green-500 rounded-md font-bold text-sm`
                : `px-4 py-1 border-2 border-green-500 rounded-md font-bold text-sm`;
            }}
          >
            Pages to Read
          </NavLink>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-green-500 text-white font-semibold text-sm rounded-md ">
            Sign In
          </button>
          <button className="px-4 py-2 bg-[#59C6D2] text-white font-semibold text-sm rounded-md ">
            Sign Up
          </button>
        </div>
      </nav>
    </>
  );
}
