import React from "react";

export default function BookListCard({ data }) {
  return (
    <div className="mb-3 flex gap-4 rounded-xl shadow-md items-center border-2 p-4">
      <div className="">
        <img src={data?.image} className=" h-[300px] rounded-md" alt="" />
      </div>
      <div>
        <h1 className="text-2xl font-PD font-bold">{data?.bookName}</h1>
        <p className="text-sm mb-3">By : {data?.author}</p>
        <div className="mb-3">
          <span className="font-bold mr-3 mb-3">Tag :</span>
          {data?.tags?.map((item, i) => (
            <span
              key={2 + i}
              className="px-2 py-1 mr-3 text-xs font-medium text-green-800 bg-green-200 rounded-full"
            >
              #{item}
            </span>
          ))}
        </div>
        <p className="font-semibold">
          Year of Publishing: <span>{data?.yearOfPublishing}</span>{" "}
        </p>
        <p className="font-bold">
          Publisher : <span>{data?.publisher}</span>
        </p>
        <p className="mb-4 font-bold">
          Page : <span>{data?.totalPages}</span>
        </p>
        <hr />
        <div className="mt-5 flex items-center gap-3">
          <span className="px-6 text-lg font-bold py-2 rounded-xl bg-[#328EFF26] text-[#328EFF]">
            Category: Classic
          </span>
          <span className="px-6 text-lg font-bold py-2 rounded-xl bg-[#FFAC3326] text-[#FFAC33]">
            Rating: {data?.rating}
          </span>

          <button className="px-6 text-lg font-bold py-2 rounded-xl bg-green-500 text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
