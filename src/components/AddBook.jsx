import React from 'react';

const AddBook = () => (
  <form>
    <input type="text" name="Title" placeholder="Title" />
    <input type="text" name="Author" placeholder="Author" />
    <input type="button" value="Add" />
  </form>
);

export default AddBook;
