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
          {/* <article className="flex flex-col p-6 rounded-2xl border">
            <img
              alt=""
              className="object-cover w-full rounded-2xl h-52 dark:bg-gray-500"
              src="https://source.unsplash.com/200x200/?fashion?1"
            />
            <div className="flex flex-col flex-1 mt-6">
              <div className="flex flex-wrap gap-2 mb-3 text-sm">
                <p className="font-medium rounded-[30px] px-4 py-[6px] bg-[#23BE0A0D] text-[#23BE0A]">
                  Young Adult
                </p>
                <p className="font-medium rounded-[30px] px-4 py-[6px] bg-[#23BE0A0D] text-[#23BE0A]">
                  Identity
                </p>
                <p className="font-medium rounded-[30px] px-4 py-[6px] bg-[#23BE0A0D] text-[#23BE0A]">
                  Identity
                </p>
              </div>
              <h3 className="flex-1 py-2 text-2xl font-semibold leading-snug">
                The Catcher in the Rye
              </h3>
              <p className="pb-4 font-medium">By : Awlad Hossain</p>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-sm dark:text-gray-600 border-t-2 border-dashed">
                <span>Fiction</span>
                <div className="flex items-center gap-2">
                  <span>5.00</span>
                  <FaRegStar />
                </div>
              </div>
            </div>
          </article> */}

          {
            books.map((book,index)=> <SingleBook key={index} book={book}></SingleBook>)
          }
        </div>
      </div>
    </section>
  );
};

export default Books;
