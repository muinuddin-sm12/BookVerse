// import { FaRegStar } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import SingleBook from "./SingleBook";
const Books = () => {
  const books = useLoaderData();
  // console.log(books);
  return (
    <section className="max-w-[1440px] py-10 mx-auto px-4 md:px-[135px] sm:py-12">
      <div className="container mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Books</h2>
        </div>
        <div className="grid grid-cols-1  gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">

          {
            books.map((book)=> <SingleBook key={book.bookId} book={book}></SingleBook>)
          }
        </div>
      </div>
    </section>
  );
};

export default Books;
