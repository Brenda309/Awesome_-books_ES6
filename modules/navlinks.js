// nav menu
const list = document.getElementById('list');
const addNew = document.getElementById('new');
const contact = document.getElementById('contact');
const bookListSect = document.getElementById('book-list');
const userInput = document.getElementById('userInput');
const contactSection = document.getElementById('contact-us');
// display constact information
const displayContact = () => {
  contact.addEventListener('click', () => {
    contactSection.style.display = 'block';
    bookListSect.style.display = 'none';
    userInput.style.display = 'none';
  });
};
displayContact();
// display list of books that were add
const displayBooks = () => {
  list.addEventListener('click', () => {
    bookListSect.style.display = 'block';
    contactSection.style.display = 'none';
    userInput.style.display = 'none';
  });
};
displayBooks();

// display input field field for use to add a book
const displayInputs = () => {
  addNew.addEventListener('click', () => {
    userInput.style.display = 'block';
    bookListSect.style.display = 'none';
    contactSection.style.display = 'none';
  });
};
displayInputs();

export { displayContact, displayBooks, displayInputs };