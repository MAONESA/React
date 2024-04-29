import PropTypes from 'prop-types';
import { useState } from "react";
import { deleteBook, updateBook } from "../services/books";

const Tr = ({ book, renderBooks }) => {
  const [title, setTitle] = useState(book.title);
  const [price, setPrice] = useState(book.price);
  return (
    <tr>
      <td>{book.id}</td>
      <td><input type="text" defaultValue={title} onChange={e => setTitle(e.target.value)} /></td>
      <td><input type="text" defaultValue={price} onChange={e => setPrice(e.target.value)} /></td>
      <td><button onClick={() => {
        deleteBook(book.id);
        renderBooks();
      }}>Remove</button>
        <button onClick={() => {
          updateBook(book.id, { title, price });
          renderBooks();
        }}>Update</button>
      </td>
    </tr>
  )
}

Tr.propTypes = {
  book: PropTypes.object.isRequired,
  renderBooks: PropTypes.func.isRequired
};

export default Tr;
