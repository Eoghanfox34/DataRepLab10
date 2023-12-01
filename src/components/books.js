import BookItem from "./bookItem";

function Books(props){

    // Iterating over each book in the "myBooks" array
    return props.myBooks.map(
        (book)=>{
            // Creating a new instance of the BookItem component with the current book, its key, and the ReloadData function as props
            return <BookItem myBook={book} key={book._id} Reload={()=>{props.ReloadData()}}></BookItem>
        }
    );

}

export default Books;