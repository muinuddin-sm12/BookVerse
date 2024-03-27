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
        return toast.error('Already Added to Read list!')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Book added to Read list!')
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
    let books = getBooksFromWish();
    let readBook = getBooks();
    const existRead = readBook.find(b=>b.bookId === book.bookId)
    if(existRead){
        return toast.error("Already Read!");
    }else{
        const isExist = books.find(b=> b.bookId == book.bookId)
    if(isExist){
        return toast.error('Already Added to Wish list!')
    }
    books.push(book)
    localStorage.setItem('wishList', JSON.stringify(books))
    toast.success('Book added to Wish list!')
    }
    
}
