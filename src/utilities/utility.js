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
        return toast.error('Already Added to Listed Books!')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Succesfully added to Listed Books!')
}





export const getBooksFromWish = () => {
    let books = [];
    const storeBooks = localStorage.getItem('wishList');
    if(storeBooks){
        books = JSON.parse(storeBooks)
    }
    return books
}
export const saveBookToWishList = book => {
    let books = getBooksFromWish()
    const isExist = books.find(b=> b.bookId == book.bookId)
    if(isExist){
        return toast.error('Already Added to Wish List!')
    }
    books.push(book)
    localStorage.setItem('wishList', JSON.stringify(books))
    toast.success('Succesfully added to Wish List!')
}