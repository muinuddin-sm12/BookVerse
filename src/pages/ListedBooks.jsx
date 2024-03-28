import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import ReadBooks from "../components/ReadBooks";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-[135px]">
      <div className="py-5 text-center font-bold text-xl w-full bg-zinc-200 rounded-xl mb-4">
        Books
      </div>

      <div className="flex justify-start items-start overflow-x-auto overflow-y-hidden flex-nowrap ">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-4 py-2 space-x-2 ${
            tabIndex === 0
              ? "border border-[#74747480] border-b-0"
              : "border-b border-[#74747480]"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>Read Books</span>
        </Link>
        <Link
          to="wishlist"
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-4 py-2 space-x-2 ${
            tabIndex === 1
              ? "border border-b-0 border-[#74747480]"
              : "border-b border-[#74747480]"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>Whishlist Books</span>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default ListedBooks;
