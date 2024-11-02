import React from "react";
import { FaStar } from "react-icons/fa";
import dummy from "../assets/books.jpg";
export default function BookCard({ data }) {
  return (
    <>
      <div className="w-80 p-5 border-2 rounded-lg shadow-md">
        <div className="bg-slate-300 rounded-lg">
          <img className=" rounded-lg w-full" src={dummy} alt="" />
        </div>
        <div className="flex gap-4 text-[12px] font-bold text-green-500 mt-3">
          <span>Young Adult</span>
          <span>identity</span>
        </div>
        <h1 className="text-2xl font-bold font-PD mt-3">The catcher</h1>
        <h2 className="text-sm font-semibold mb-3">By: aolad hossin</h2>
        <hr />
        <div className="flex mt-3 justify-between">
          <span className="font-PD font-semibold">Fiction</span>
          <span className="flex items-center gap-2">
            5.00 <FaStar />
          </span>
        </div>
      </div>
    </>
  );
}
