import React, { useContext } from "react";
import BookListCard from "./BookListCard";
import { AllData } from "../context/AllData";

export default function ListedBooks() {
  const { readBook } = useContext(AllData);

  return (
    <div role="tablist" className="tabs tabs-lifted lg:w-4/5 w-11/12 mx-auto">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Read_Books"
        defaultChecked
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        Tab content 1
        {/* <div className="flex gap-4 rounded-xl shadow-md items-center border-2 p-4">
          <div className="lg:w-2/5">
            <img src="./books.jpg" className="rounded-md" alt="" />
          </div>
          <div>
            <h1 className="text-2xl font-PD font-bold">
              The Catcher in the Rye
            </h1>
            <p className="text-sm">By : Awlad Hossain</p>
            <div>
              <span className="font-bold">Tag :</span>
            </div>
            <p className="font-semibold">
              Year of Publishing <span></span>{" "}
            </p>
            <p className="font-bold">
              Publisher : <span>asdf</span>
            </p>
            <p className="mb-4 font-bold">
              Page : <span>asdf</span>
            </p>
            <hr />
            <div className="mt-5 flex items-center gap-3">
              <span className="px-6 text-lg font-bold py-2 rounded-xl bg-[#328EFF26] text-[#328EFF]">
                Category: Classic
              </span>
              <span className="px-6 text-lg font-bold py-2 rounded-xl bg-[#FFAC3326] text-[#FFAC33]">
                Rating: 4.5
              </span>

              <button className="px-6 text-lg font-bold py-2 rounded-xl bg-green-500 text-white">
                View Details
              </button>
            </div>
          </div>
        </div> */}
        {readBook?.map((item, i) => (
          <BookListCard key={i + i} data={item} />
        ))}
        {/* <BookListCard /> */}
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Wishlist_Books"
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        Tab content 2
      </div>
    </div>
  );
}
