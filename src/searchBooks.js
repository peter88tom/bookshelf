/*
	This function fetches books from open library API,
	select the first 10 results, then transform a bit to only return the title and the author

	It will be used to AddBook component to return as user types in form 
*/
export async function searchBooks(query){
	if(query.trim() === "") return [];

	const response = await fetch(
		`https://openlibrary.org/search.json?q=${encodeURI(query)}`
	);

	const result = await response.json();

	return result.docs.slice(0, 10).map(({title, author_name}) => ({
		title,
		author: author_name?.join(", "),
	}));
}