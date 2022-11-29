import logo from './logo.svg';
import styles from './App.module.css';
import { BookList } from './BookList';
import { AddBook } from './AddBook';


// Compose BookList and AddBook togethere
function Bookshelf(){
  return (
      <div>
          <h1>My Bookshelf</h1>
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
