const booksContainer = document.querySelector('#books-container');

const booksArr = [];

export default function addBook(title, author) {
  const newBook = {
    title,
    author,
  };
  booksArr.push(newBook);

  const bookItem = document.createElement('div');
  booksArr.forEach((book, index) => {
    bookItem.innerHTML = `
    <div class="book-item">
    <p class="book-title">"${book.title}" by ${book.author}</p>                                          
    <button type="button" id="${index}" class="remove-btn">Remove</button>   
    </div>`;

    const removeBtn = bookItem.querySelector('.remove-btn');
    removeBtn.addEventListener('click', () => {
      booksArr.splice(index, 1);
      bookItem.remove();
    });
  });

  booksContainer.appendChild(bookItem);
}
