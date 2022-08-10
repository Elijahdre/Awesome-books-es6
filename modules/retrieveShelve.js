export default function retrieveShelve() {
  const books = JSON.parse(localStorage.getItem('books'));
  if (books) {
    books.forEach((book) => {
      addBook(book.title, book.author);
    });
  }
}
