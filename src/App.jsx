import logo from './logo.svg';
import styles from './App.module.css';
import { BookList } from './BookList';
import { AddBook } from './AddBook';


// Compose BookList and AddBook togethere
// Bookshelf is a parent component since it combine other components
// Component function only ever take one argument,if any: the props
function Bookshelf(props){
  return (
      <div>
          <h1>{props.name}'s Bookshelf</h1>
          <BookList />
          <AddBook />
      </div>
  );
}

function App() {
  return (
    <Bookshelf />
  );
}

export default App;
