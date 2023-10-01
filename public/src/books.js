function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
  return found;
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
  return found;
}

const getBorrowedBooks = (books) => {
  return books.filter((book) => book.borrows[0].returned === false);
  };
function partitionBooksByBorrowedStatus(books) {

  let borrowedBooks = getBorrowedBooks(books);
  let returnedBooks = books.filter((book) => book.borrows[0].returned === true);
  return [borrowedBooks, returnedBooks]
}

function getBorrowersForBook(book, accounts) {
  let borrowers = book.borrows
   .map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return { ...borrow, ...account };
   })
   return borrowers.slice(0, 10);
 }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
