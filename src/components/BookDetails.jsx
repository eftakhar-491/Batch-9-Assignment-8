import React, { useContext } from "react";
import { AllData } from "../context/AllData";

export default function BookDetails() {
  const { bookDetails, setReadBook } = useContext(AllData);

  return (
    <>
      <div className="w-11/12 lg:w-4/5 mx-auto p-6 bg-white shadow-lg rounded-lg md:flex md:gap-6">
        {/* Book Image */}
        <div className="md:w-2/5">
          <img
            src={bookDetails?.image}
            alt="Book cover"
            className="w-full rounded-md h-[550px]"
          />
        </div>

        {/* Book Details */}
        <div className="mt-6 md:mt-0 md:flex-1">
          <h2 className="text-2xl font-semibold text-gray-800">
            {bookDetails.bookName}
          </h2>
          <p className="text-gray-600 mt-1 mb-2">By: {bookDetails?.author}</p>
          <hr />
          <p className="text-sm text-gray-500 mb-2 mt-2">
            {bookDetails?.category}
          </p>
          <hr />
          {/* Review */}
          <p className="text-gray-700 text-sm leading-relaxed mt-4">
            <strong>Review:</strong> {bookDetails.review}
          </p>

          {/* Tags */}
          <div className="flex gap-2 mt-4 mb-4">
            {bookDetails?.tags?.map((item, i) => (
              <span
                key={1 + i}
                className="px-2 py-1 text-xs font-medium text-green-800 bg-green-200 rounded-full"
              >
                #{item}
              </span>
            ))}
            {/* <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-200 rounded-full">
              #Identity
            </span> */}
          </div>
          <hr />
          {/* Additional Details */}
          <div className="mt-6 text-gray-700 text-sm">
            <p>
              <strong>Number of Pages:</strong> {bookDetails?.totalPages}
            </p>
            <p>
              <strong>Publisher:</strong> {bookDetails?.publisher}
            </p>
            <p>
              <strong>Year of Publishing:</strong>{" "}
              {bookDetails?.yearOfPublishing}
            </p>
            <p>
              <strong>Rating:</strong> {bookDetails?.rating}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() =>
                setReadBook((pre) => {
                  return [
                    ...pre.filter((item) => item.bookId !== bookDetails.bookId),
                    bookDetails,
                  ];
                })
              }
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Read
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
