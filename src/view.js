import React from 'react';
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash';
import {pencil} from 'react-icons-kit/icomoon/pencil'



 const View = ({books,deleteBook,editBook}) => {
    return books.map(book=>(
        <tr key={book.isbn}>
            <td>{book.isbn}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td className='delete-btn' onClick={() =>deleteBook(book.isbn)}>
                <Icon icon = {trash} />     
            </td>
            <td className='edit-btn' onClick={() =>editBook(book.isbn)}>
                <Icon icon = {pencil} />     
            </td>
        </tr>
    ))
}
export default View;