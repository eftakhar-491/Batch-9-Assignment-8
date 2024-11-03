import React, { useContext, useEffect } from "react";
import BookCard from "./BookCard";
import axios from "axios";
import { AllData } from "../context/AllData";

export default function AllBooks() {
  const { fetchData, setFetchData } = useContext(AllData);
  useEffect(() => {
    setTimeout(() => {
      axios.get("/booksData.json").then((res) => {
        setFetchData(res.data);
      });
    }, 3000);
  }, []);

  return (
    <section className="mt-10">
      <h1 className="text-3xl font-PD font-bold text-center mt-3">Books</h1>
      <div className="flex justify-evenly gap-4 mt-5 flex-wrap lg:w-4/5 w-11/12 mx-auto">
        {/* <BookCard />
        <BookCard /> */}
        {fetchData.length === 0 ? (
          <span className="loading loading-infinity loading-lg"></span>
        ) : (
          fetchData?.map((item, i) => <BookCard data={item} key={i} />)
        )}
      </div>
    </section>
  );
}
