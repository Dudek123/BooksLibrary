import {Book} from './book';

export class App {
    constructor() {
		this.heading = "My library";
        this.books = this.getBooksFromStorage();
        this.bookTitle = '';
		this.bookAuthor = '';
		this.bookAvailability = true;
    }
     
    addBook() {
		if(this.bookTitle && this.bookAuthor)
		{
			this.books.push(new Book(this.bookTitle, this.bookAuthor, this.bookAvailability));
			
			//Store in LS
			this.storeBook(this.bookTitle, this.bookAuthor, this.bookAvailability);
			
			//Clear fields
			this.bookAuthor = '';
			this.bookTitle = '';
			this.bookAvailability = true;
		}  
    }
	
	storeBook(title, author, availability)
	{
		let books;
		if(localStorage.getItem('books') === null)
		{
			books = [];
		}
		else
		{
			books = JSON.parse(localStorage.getItem('books'));
		}
		books.push({title: title, author: author, isAvailable: availability});
		localStorage.setItem('books',JSON.stringify(books));
	}
	
	getBooksFromStorage()
	{
		let books;
		if(localStorage.getItem('books') === null)
		{
			books = [];
		}
		else
		{
			books = JSON.parse(localStorage.getItem('books'));
		}
		return books;
	}
 
    deleteBook(book) {
		let index = this.books.indexOf(book);
		if(index !== -1)
		{
			this.books.splice(index, 1);
		} 
		this.removeBookFromStorage(index);
    }
	
	removeBookFromStorage(index)
	{
		let books = JSON.parse(localStorage.getItem('books'));
		books.splice(index,1);
		localStorage.setItem('books',JSON.stringify(books));
	}
	
	changeBookAvailability(book) {
		let index = this.books.indexOf(book);
        book.isAvailable = !book.isAvailable;
		localStorage.setItem('books',JSON.stringify(this.books));
    }
	
	
 
    
}