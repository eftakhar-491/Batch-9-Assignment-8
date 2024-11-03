import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetails from "./components/BookDetails.jsx";
import Home from "./components/Home.jsx";
import ListedBooks from "./components/ListedBooks.jsx";
import Dashbord from "./components/Dashbord.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>400 Error</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details",
        element: <BookDetails />,
      },
      {
        path: "/Listed-Books",
        element: <ListedBooks />,
      },
      {
        path: "/dashbord",
        element: <Dashbord />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
