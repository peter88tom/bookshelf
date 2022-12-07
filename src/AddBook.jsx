import { createSignal } from 'solid-js';

const emptyBook = { title: "", author: "" };

export function AddBook(props){

	
	const [newBook, setNewBook] = createSignal(emptyBook);

	
	// When submit button is clicked call this function
	const addBook = (event) => {
		event.preventDefault();
		

		// update books with the new added array/book
		props.setBooks((books) => [...books, newBook()]);


		// set the add book
		setNewBook(emptyBook);

		
	};

	return (
		<form>
			<div>
				<label for="title">Book Name</label>
				<input id="title"
				value={newBook().title}
				onInput={(e) => {
					setNewBook({ ...newBook(), title: e.currentTarget.value});
				}}/>
			</div>
			
			<div>
				<label for="author">Author</label>
				<input id="author"
				value={newBook().author}
				onInput={(e) =>{
					setNewBook({ ...newBook(), author: e.currentTarget.value});
				}}/>
			</div>

			<button type="submit" onClick={addBook}>Add book</button>
		</form>
	);
}