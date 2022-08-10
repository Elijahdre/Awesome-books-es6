import addBook from './modules/addBook.js';
import { DateTime } from './modules/luxon.js';

const booksForm = document.querySelector('.books-form');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');

window.onload = () => {
  const date = document.getElementById('date');
  date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_HUGE);
};

// submit button event
booksForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (bookTitle.value !== '' && bookAuthor.value !== '') {
    addBook(bookTitle.value, bookAuthor.value);

    bookTitle.value = '';
    bookAuthor.value = '';
  }
});

// buttons
const navList1 = document.getElementById('list');
const navList2 = document.getElementById('add-new');
const navList3 = document.getElementById('contact');

// sections
const sectionOne = document.getElementById('all-book');
const sectionTwo = document.getElementById('add-new-book');
const sectionThree = document.getElementById('contact-form');

navList1.addEventListener('click', (e) => {
  e.preventDefault();
  sectionOne.classList.remove('hide');
  sectionTwo.classList.add('hide');
  sectionThree.classList.add('hide');
});

navList2.addEventListener('click', (e) => {
  e.preventDefault();
  sectionOne.classList.add('hide');
  sectionTwo.classList.remove('hide');
  sectionThree.classList.add('hide');
});

navList3.addEventListener('click', (e) => {
  e.preventDefault();
  sectionOne.classList.add('hide');
  sectionTwo.classList.add('hide');
  sectionThree.classList.remove('hide');
});
