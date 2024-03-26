import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import ListedBooks from './pages/ListedBooks';
import PagesToRead from './pages/PagesToRead';
import MainLayout from './layout/MainLayout';
import BookDetails from './pages/BookDetails';

const router = createBrowserRouter([
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
        // loader: ({params})=> fetch(`books.json/${params.bookId}`)
        // loader: ()=> fetch("/books.json"),
      },
      {
        path: "/listedbooks",
        element: <ListedBooks/>
      },
      {
        path: "/pagestoread",
        element: <PagesToRead/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
