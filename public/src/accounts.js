function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found
}

function sortAccountsByLastName(accounts) {
  let sorted = accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  return sorted;
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  for (let i = 0; i < books.length ; i++){
    for (let j = 0; j < books[i].borrows.length; j++){
      if (books[i].borrows[j].id === account.id) {
        total += 1;
      }
    }
  }

  return total;

}

function getBooksPossessedByAccount(account, books, authors) {
  let accountBooks = [];

  books.forEach((book) => {
    if (book.borrows.find((borrow) => borrow.id === account.id && !borrow.returned)) {
      accountBooks.push(book);
    };
  });

  accountBooks.forEach((book) => {
    let author = authors.find((auth) => auth.id === book.authorId);
    book['author'] = author
})
  return accountBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
