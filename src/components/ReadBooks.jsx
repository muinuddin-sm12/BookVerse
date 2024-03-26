import { useEffect, useState } from "react";
import { getBooks } from "../utilities/utility";
import { SlLocationPin } from "react-icons/sl";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { Link } from "react-router-dom";
const ReadBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storedBooks = getBooks();
    setBooks(storedBooks);
  }, []);
//   console.log(books);
  return (
    <div className="max-w-[1440px] flex flex-col gap-6 h-screen mt-6">
      {books.map((book, index) => (
        <div key={index} className="w-full p-5 rounded-xl border flex gap-6 items-center">
          <div className="h-[230px] w-[180px] overflow-hidden rounded-xl">
            <img className=" h-full object-cover w-full" src={book.image} alt="" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">The Catcher in the Rye</h1>
            <p className="py-2">By : Awlad Hossain</p>
            <div className="flex items-center gap-4">
              <strong>Tag</strong>
              <div className="flex items-center">
                <p className="font-medium rounded-[30px] px-4 py-[6px] bg-[#23BE0A0D] text-[#23BE0A]">
                  #Young Adult
                </p>
                <p className="font-medium rounded-[30px] px-4 py-[6px] bg-[#23BE0A0D] text-[#23BE0A]">
                  #Young
                </p>
              </div>
              <div className="flex items-center gap-2">
                <SlLocationPin />
                <p>Year of Publishing: 1924</p>
              </div>
            </div>
            <div className="flex items-center gap-6 py-2 border-b text-[#13131399]">
              <div className="flex items-center gap-2">
                <FaUserGroup />
                <p>Publisher: </p>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineInsertPageBreak />
                <p>Page: </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <p className="text-[#328EFF] bg-[#c0dcff] px-4 py-1 rounded-full font-medium">
                Category: Classic
              </p>
              <p className="text-[#FFAC33] bg-[#ffe9c7] px-4 py-1 rounded-full font-medium">
                Rating: 4.5
              </p>
              <Link
                to=""
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
