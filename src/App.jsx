import { createSignal, Show } from 'solid-js';
import { BookList } from './BookList';
import { AddBook } from './AddBook';



// Compose BookList and AddBook togethere
// Bookshelf is a parent component since it combine other components
// Component function only ever take one argument,if any: the props



const initialBooks  = [
	{ title: "Code Complete", author: "Steve McConnell" },
	{ title: "The Hobbit", author: "J.R.R. Tolkien" },
	{ title: "Living a Feminist Life", author: "Sarah Ahmed" },
	{ title: "Things fall apart", author: "Sarah Ahmed" },
];

function Bookshelf(props){

  const [books, setBooks] = createSignal(initialBooks);

  // Hide form by default
  const [showForm, setShowForm] = createSignal(false);

  // button to control hide and showing the form
  // When this buttton is clicked, set opposite value from the current value
  const toggleForm = () => setShowForm(!showForm());

  return (
      <div>
          <h1>{props.name}'s Bookshelf</h1>
          <BookList books={books()} />
          <Show
            when={showForm()}
            fallback={<button onClick={toggleForm}>Add Book</button>}
          >

          <AddBook setBooks={setBooks} />
          <button onClick={toggleForm}>Finish Adding Book</button>
          </Show>
          
      </div>
  );
}

function App() {
  return (
    <Bookshelf name="Solid"/>
  );
}

export default App;


// Solid primitives  - Are the building blocks of interactivity of the app
// .  - Example of primitive is Signal
//    - Effect is another reactive primitive which you can use to listedn for and instant change
//       - Effect is registered as listener on signal
// components are the building block of views in a solid app