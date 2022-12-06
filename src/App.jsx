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


// Solid primitives  - Are the building blocks of interactivity of the app
// .  - Example of primitive is Signal
//    - Effect is another reactive primitive which you can use to listedn for and instant change
//       - Effect is registered as listener on signal
// components are the building block of views in a solid app