function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let checkedOut = books.filter(
    (rec) =>
      rec.borrows[0].returned === false);

  return checkedOut.length;
}

function getMostCommonGenres(books) {
  let genres = books.reduce((acc, book) => {
    let genre = book.genre
    if (acc[genre]) {
      acc[genre].count += 1
    } else {
      acc[genre] = {
        name: genre, count: 1
      }
    }
    return acc;
  }, {});

  const genreCounts = Object.values(genres);
  let sorted = genreCounts.sort((genreA, genreB) =>
    (genreA.count < genreB.count ? 1 : -1));
  return genreCounts.slice(0,5);

}

function getMostPopularBooks(books) {
  let popularBooks = books
   .map((book) => {
    return { name: book.title, count: book.borrows.length };
   });
   popularBooks.sort((a, b) => (a.count < b.count ? 1 : -1));
   return popularBooks.slice(0, 5);
 }

 function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    let authObj = {
      name: `${author.name.first} ${author.name.last}`,
      count : 0
    };
    books.forEach((book) => {
    if (book.authorId === author.id) {
      authObj.count += book.borrows.length;
    }
    });
    result.push(authObj);
  });

  let sorted = result.sort((countA, countB) => countB.count - countA.count);
   return result.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
