const { default: client } = require("../client");

export const createBook = ({ title, comment }) =>
  client.post("api/books", { title, comment });

export const listBooks = () => client.get("api/books");

export const deleteBook = ({ _id }) => client.delete(`api/books/${_id}`);

export const readBook = ({ _id }) => client.get(`api/books/${_id}`);

export const addWordInBook = ({ _id, words }) =>
  client.patch(`api/books/${_id}`, { words });

export const patchBook = ({ _id, star }) =>
  client.patch(`api/books/${_id}`, { star });
