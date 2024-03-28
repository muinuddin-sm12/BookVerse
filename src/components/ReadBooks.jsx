import { useEffect, useState } from "react";
import { getBooks } from "../utilities/utility";
import { SlLocationPin } from "react-icons/sl";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const ReadBooks = () => {
  const [books, setBooks] = useState([]);
  const [sortText, setSortText] = useState(null);

  useEffect(() => {
    const storedBooks = getBooks();
    setBooks(storedBooks);
  }, []);

  useEffect(() => {
    if (books.length > 0) {
      document.getElementById("sortButton").classList.remove("hidden");
    }
  }, [books]);
  // console.log(sortBook);
  const handleSorting = (sort) => {
    setSortText(sort);
    if (sortText === "rating") {
      const ratingBook = books
        .filter((book) => book.rating)
        .sort((a, b) => b.rating - a.rating);
      setBooks(ratingBook);
    } else if (sortText === "pages") {
      const totalPages = books
        .filter((book) => book.totalPages)
        .sort((a, b) => b.totalPages - a.totalPages);
      setBooks(totalPages);
    } else {
      const publishYear = books
        .filter((book) => book.yearOfPublishing)
        .sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      setBooks(publishYear);
    }
  };
  return (
    <div className="max-w-[1440px] min-h-[calc(100vh-475px)] flex flex-col gap-6 justify-center items-center  mb-8 lg:mb-20 mt-6">
      <div
        id="sortButton"
        className="right-0 top-[100px] hidden relative  py-2"
      >
        <details className="dropdown absolute -top-[170px] -right-[30vw]">
          <summary className="m-1 btn bg-[#23BE0A] text-white rounded-md">
            Sort By
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleSorting("rating")} className="tooltip" data-tip="Please Double Click!">
              <a>Rating</a>
            </li>
            <li onClick={() => handleSorting("pages")} className="tooltip" data-tip="Please Double Click!">
              <a>Number of pages</a>
            </li>
            <li onClick={() => handleSorting("year")} className="tooltip" data-tip="Please Double Click!">
              <a>Published year</a>
            </li>
          </ul>
        </details>
      </div>
      {books.map((book, index) => (
        <div
          key={index}
          className="w-full p-5 rounded-xl border flex flex-col md:flex-row gap-6 items-center"
        >
          <div className="h-[230px] w-[180px] overflow-hidden rounded-xl">
            <img
              className=" h-full object-cover w-full"
              src={book.image}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold">{book.bookName}</h1>
            <p className="py-2">By : {book.author}</p>
            <div className="flex flex-col md:flex-row items-center md:gap-3">
              <strong>Tag</strong>
              <div className="flex  items-center">
                {book.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="font-medium rounded-[30px] px-4 py-[6px] bg-[#23BE0A0D] text-[#23BE0A]"
                  >
                    #{tag}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <SlLocationPin />
                <p>Year of Publishing: {book.yearOfPublishing}</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:gap-6 py-2 border-b text-[#13131399]">
              <div className="flex items-center gap-2">
                <FaUserGroup />
                <p>Publisher: {book.publisher}</p>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineInsertPageBreak />
                <p>Page: {book.totalPages}</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 mt-3">
              <p className="text-[#328EFF] bg-[#c0dcff] px-4 py-1 rounded-full font-medium">
                Category: {book.category}
              </p>
              <p className="text-[#FFAC33] bg-[#ffe9c7] px-4 py-1 rounded-full font-medium">
                Rating: {book.rating}
              </p>
              <Link
                to={`/book/${book.bookId}`}
                className="bg-[#23BE0A] px-4 py-1 text-white font-semibold rounded-full"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadBooks;

// to={`/book/${bookId}`}
