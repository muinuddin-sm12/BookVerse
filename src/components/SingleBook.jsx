/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const SingleBook = ({ book }) => {
  const { image, tags, bookName, author, category, rating, bookId } = book;
  //   console.log(book);
  return (
    <Link
      to={`/book/${bookId}`}
      className="flex flex-col p-4 rounded-2xl border"
    >
      <div className="h-[280px] p-6 overflow-hidden rounded-2xl  bg-[#F3F3F3]">
        <img
          alt=""
          className="object-cover h-full mx-auto rounded-md"
          src={image}
        />
      </div>
      <div className="flex flex-col flex-1 mt-6">
        <div className="flex flex-wrap gap-2 mb-3 text-sm">
          {tags.map((tag, index) => (
            <p
              key={index}
              className="font-medium rounded-[30px] px-4 py-[6px] bg-[#23BE0A0D] text-[#23BE0A]"
            >
              #{tag}
            </p>
          ))}
        </div>
        <h3 className="flex-1 py-2 text-2xl font-semibold leading-snug">
          {bookName}
        </h3>
        <p className="pb-4 font-medium">By : {author}</p>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-sm dark:text-gray-600 border-t-2 border-dashed">
          <span>{category}</span>
          <div className="flex items-center gap-2">
            <span>{rating}</span>
            <FaRegStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleBook;
