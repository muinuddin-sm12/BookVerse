import toast from "react-hot-toast";
 
export const getBooks = () => {
    let books = [];
    const storeBooks = localStorage.getItem('books');
    if(storeBooks){
        books = JSON.parse(storeBooks)
    }
    return books
}


export const saveBook = book => {
    let books = getBooks()
    const isExist = books.find(b=> b.bookId == book.bookId)
    if(isExist){
        return toast.error('Already Exist')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Succesfully added to Listed Book')
}
