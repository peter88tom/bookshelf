import { createResource, createSignal, For, Show } from 'solid-js';
import { BookList } from './BookList';
import { searchBooks } from './searchBooks';

/*
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
}*/


export function AddBook(props){
	const [input, setInput] = createSignal("");
	const [query, setQuery] = createSignal("");

	// We are using createResource to query openlibrary, it will take the signal and data-fetched function as arguments
	const[data] = createResource(query, searchBooks);

	return (
		<>
		<form>
			<div>
				<label for="title">Search Book</label>
				<input
					id="title"
					value={input()}
					onInput={(e) => {
						setInput(e.currentTarget.value)
					}}

				/>
			</div>

			
				<button
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						setQuery(input())
					}}
					>
					Search
				</button>
			
		</form>


		<Show when={!data.loading} fallback={<>searching...</>}>
			<ul>
				<For each={data()}>
					{(book) => (
						<li>
							{book.title} by {book.author} {" "} - 
							<button
							aria-label={`Add ${book.title} by ${book.author} to the book shelf`}
							onClick={(e) => {
								e.preventDefault();
								props.setBooks((books) => [...books, book]);
							}}>
							Add
							</button>
						</li>
					)}
				</For>
			</ul>
		</Show>
		</>
	);
	
}