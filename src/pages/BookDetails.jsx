import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FadeLoader } from 'react-spinners';
import { saveBook } from '../utilities/utility';
const BookDetails = () => {
    const {bookId} = useParams();
    const [book, setBook] = useState(null);
    // const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating} = book;

    useEffect(()=>{
        fetch('/books.json')
        .then(res => res.json())
        .then (data => {
            const findBook = data.find(item => item.bookId === bookId);
            setBook(findBook)
        })
    },[bookId])
    if(!book){
        return (
            <div className='flex justify-center items-center h-[calc(100vh-126px)]'>
                <FadeLoader color='#23BE0A'/>
            </div>
        )
    }
    // console.log(book)
    const handleRead = (singleBook) =>{
        saveBook(singleBook)
        console.log(singleBook)
    }
  return (
    <div className="flex flex-col md:flex-row lg:gap-10 gap-6  py-10 justify-between items-center max-w-[1440px] mx-auto px-4 md:px-[135px] rounded-3xl">
      <div className="flex-1 rounded-2xl overflow-hidden h-[720px]">
        <img className="w-full h-full object-cover" src={book.image} alt="" />
      </div>
      <div className='flex-1'>
        <h1 className='text-3xl font-semibold mb-2'>{book.bookName}</h1>
        <p className='mb-2'>By: {book.author}</p>
        <p className='py-2 border-t-[1px] border-b-[1px] mb-2'>{book.category}</p>
        <p>
          <strong>Review:</strong> {book.review}
        </p>
        <div className='py-2 border-b-[1px] flex items-center gap-3 mb-2'>
          <strong>Tag</strong>
          <div className='flex items-center gap-1'>
            {
                book.tags.map((item, index)=> (
                    <p key={index} className="font-medium rounded-[30px] px-4 py-[6px] bg-[#23BE0A0D] text-[#23BE0A]">
              #{item}
            </p>
                ))
            }
            
          </div>
        </div>
        <table className='mb-4'>
          <tr>
            <td className='pr-6'>Number of Pages:</td>
            <td>
              <strong>{book.totalPages}</strong>
            </td>
          </tr>
          <tr>
            <td>Publisher:</td>
            <td>
              <strong>{book.publisher}</strong>
            </td>
          </tr>
          <tr>
            <td>Year of Publishing:</td>
            <td>
              <strong>{book.yearOfPublishing}</strong>
            </td>
          </tr>
          <tr>
            <td>Rating:</td>
            <td>
              <strong>{book.rating}</strong>
            </td>
          </tr>
        </table>
        <div className='flex items-center gap-4'>
          <button onClick={()=> handleRead(book)} className='px-4 py-2 bg-[#23BE0A] transition duration-300 border text-white hover:text-black hover:bg-white font-semibold rounded-lg'>Read</button>
          <button className='px-4 py-2 bg-[#50B1C9] transition duration-300 border text-white hover:text-black hover:bg-white font-semibold rounded-lg'>Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
