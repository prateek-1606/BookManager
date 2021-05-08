import React from "react";
import { Increment, Decrement } from '../api/index'
import { useHistory } from 'react-router-dom'

const ShowBooks = ({ books, isAdmin }) => {

  const history = useHistory()
  const handleInc = (id) => {
    Increment(id).then((res) => {
      console.log(res);
      history.push('/')
    })
      .catch((error) => {
        console.log(error);
      })
  }

  const handleDec = (id) => {
    Decrement(id).then((res) => {
      console.log(res);
      history.push('/')
    })
      .catch((error) => {
        console.log(error);
      })
  }


  return (
    <table className="table my-4">
      <tr>
        <th>Author Name</th>
        <th>Year Of Publication</th>
        <th>No Of Copies</th>
        {isAdmin ? (
          <>
            <th>Increment Copies</th>
            <th>Decrement Copies</th>
          </>
        ) : (<th>Issue Book</th>)}
      </tr>
      {books.map((book) => (
        <tbody key={book._id}>
          <tr>
            <td>{book.Authorname}</td>
            <td>{book.YearOfPublication}</td>
            <td>{book.NoOfCopies}</td>
            {isAdmin ? (
              <>
                <td><button className="btn" href="" onClick={() => handleInc(book._id)} >Increment</button></td>
                <td><button className="btn" href="" onClick={() => handleDec(book._id)} >Decrement</button></td>
              </>) : (
              <td><button className="btn" onClick={() => handleDec(book._id)} >Issue</button></td>
            )}
          </tr>
        </tbody>
      ))}
    </table>
  );
};
export default ShowBooks;
