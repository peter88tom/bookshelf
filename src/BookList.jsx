import { createSignal, For } from "solid-js"

const initialBooks  = [
	{ title: "Code Complete", author: "Steve McConnell" },
	{ title: "The Hobbit", author: "J.R.R. Tolkien" },
	{ title: "Living a Feminist Life", author: "Sarah Ahmed" },
	{ title: "Things fall apart", author: "Sarah Ahmed" },
];

// Total books
// in Solid we use derivative state, can think of derivative state as the computational based on 
// the information you already have



export function BookList(){

	const [books, setBooks] = createSignal(initialBooks);

	const totalBooks = () => books().length;

	return (
		<>
		<h2>Total Books ({ totalBooks() })</h2>
		<ul>
			<For each={books()}>
				{(book) => {
					return (
						<li>
							{book.title} {" "}
							<span style={{"font-style":"italic"}}>{book.author}</span>
						 </li>
					);
				}}
			</For>
		</ul>
		</>
	)
}