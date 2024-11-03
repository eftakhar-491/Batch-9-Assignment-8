import { useState } from "react";
import AllBooks from "./components/AllBooks";
import BookCard from "./components/BookCard";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { AllData } from "./context/AllData";
import { Outlet } from "react-router-dom";

function App() {
  const [fetchData, setFetchData] = useState([]);
  const [bookDetails, setBookDetails] = useState({});
  const [readBook, setReadBook] = useState([]);
  return (
    <>
      <AllData.Provider
        value={{
          readBook,
          setReadBook,
          fetchData,
          setFetchData,
          bookDetails,
          setBookDetails,
        }}
      >
        <main className="max-w-[1440px] mx-auto">
          <Nav />
          <Outlet />
        </main>
      </AllData.Provider>
    </>
  );
}

export default App;
