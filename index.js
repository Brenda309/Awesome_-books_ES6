import add from './modules/add.js';
import { displayContact, displayBooks, displayInputs } from './modules/navlinks.js';
import Book from './modules/classes.js';

class Books {
  constructor() {
    this.array = [];
  }
}

const booksTitle = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.getElementById('addBtn');

const storage = new Books();

if (localStorage.Books) {
  storage.array = JSON.parse(localStorage.Books);
}

addBtn.addEventListener('click', () => {
  if (!booksTitle.value || !author.value) {
    alert('Enter both title books and author');
  } else {
    const book = new Book(booksTitle.value, author.value);
    storage.array.push(book);
    book.value = '';
    author.value = '';
    const stringData = JSON.stringify(storage.array);
    localStorage.setItem('Books', stringData);
    window.location.reload();
  }
});

// Add book function

add();
// remove
const remove = () => {
  const rmv = document.getElementsByClassName('rmv');
  for (let i = 0; i < rmv.length; i += 1) {
    const rmvButton = document.getElementById(`btn${i}`);
    const titleName = storage.array[i].title;
    const list = document.getElementById(`${i}`);
    rmvButton.addEventListener('click', () => {
      const filtered = storage.array.filter((Books) => Books.title !== titleName);
      const stringData = JSON.stringify(filtered);
      localStorage.setItem('Books', stringData);
      list.remove();
      window.location.reload();
    });
  }
};
remove();
// Add functionalities to the nav-menu

// display constact information

displayContact();
// display list of books that were add

displayBooks();

// display input field field for use to add a book

displayInputs();