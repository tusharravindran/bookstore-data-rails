import React from 'react';

function Books(props) {
  return ( 
  <div>
      <h1>From Api data</h1>
      {props.books.map((book) => {
        return (
        <div key={book.id}>
          <p>hfsejfbj</p>
        <h2>Title: {book.title}</h2>
        <h2>Content: {book.body}</h2>
    </div>
  );
})}
</div>
  );
}


export default Books