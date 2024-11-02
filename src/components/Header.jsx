import React from "react";
import hero from "../assets/hero.png";
export default function Header() {
  return (
    <>
      <header className="bg-[#1313130D] mt-3 flex rounded-xl py-12 justify-evenly items-center lg:w-4/5 w-11/12 mx-auto">
        <div>
          <h1 className="lg:text-5xl text-3xl font-PD font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="mt-6 font-bold text-sm px-4 py-2 bg-green-500 text-white rounded-xl">
            View The List
          </button>
        </div>
        <img className="h-full w-72" src={hero} alt="" />
      </header>
    </>
  );
}
