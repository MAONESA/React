import { useState, useEffect } from "react";
import { createBook, getBook } from "./services/books";
import Tr from './Components/Tr';

const App = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [books, setBooks] = useState([]);

  const renderBooks = () => getBook().then(b => setBooks(b));

  useEffect(() => {
    renderBooks();
  }, []);

  return (
    <div>
      <table border="1px">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>

          {
            books.map(book => <Tr key={book.id} book={book} renderBooks={renderBooks} />)
          }
          <tr>
            <th></th>
            <th><input type="text" onChange={e => setTitle(e.target.value)} /></th>
            <th><input type="text" onChange={e => setPrice(e.target.value)} /></th>
            <td><button onClick={() => {
              createBook({ title, price });
              renderBooks();
              setTitle('');
              setPrice('');
            }}>Add</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App;
