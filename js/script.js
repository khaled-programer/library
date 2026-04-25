const myLibrary = [];
const form = document.querySelector('.form');
const addForm = document.getElementById('addForm');
const newBook = document.querySelector('.new-book');
const close = document.querySelector('.close');

newBook.addEventListener('click', function () {
  form.style.left = '400px';
});

close.addEventListener('click', function () {
  form.style.left = '-400px';
});


function Book(title, author, pages) {
  if (!new.target) { throw Error("You must use 'new' keyword to use constructor"); }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;

  this.info = function () {
    return `The ${this.title}, by ${this.author} ${this.pages} pages`;
  };
}

addForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(addForm);
  const title = formData.get('title');
  const author = formData.get('author');
  const pages = formData.get('pages');

  const book = new Book(title, author, pages);
  myLibrary.push(book);

  viewBooks();
  addForm.reset();
});

function viewBooks() {
  const grid = document.querySelector('.grid');
  const card = document.createElement('div');
  const fragment = document.createDocumentFragment();
  card.className = 'card';

  myLibrary.forEach(book => {
    card.innerHTML = `
    <h3>${book.title}</h3>
    <p>Written By ${book.author}</p>
    <p> ${book.pages} pages</p>
    <button data-id="${book.id}">Delete Book</button>
    `;
    fragment.appendChild(card);
  });
  grid.appendChild(fragment);
}
