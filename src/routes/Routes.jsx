import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import ReadBooks from "../components/ReadBooks";
import Wishlist from "../components/Wishlist";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
          loader:()=> fetch('/books.json'),
        },
        {
          path: "/book/:bookId",
          element: <BookDetails/>,
        },
        {
          path: "/listedbooks",
          element: <ListedBooks/>,
          children: [
            {
                index: true,
                element: <ReadBooks/>
            },
            {
                path: 'wishlist',
                element: <Wishlist/>
            },
          ]
        },
        {
          path: "/pagestoread",
          element: <PagesToRead/>
        }
      ]
    },
  ]);