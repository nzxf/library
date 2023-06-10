//CONSTRUCTOR: BOOK
function Book(title, author, pages, readStatus, cover, synopsis) {
  this.title = title || 'untitled';
  this.author = author || 'anonymous';
  this.pages = pages || 0;
  this.readStatus = readStatus;
  this.cover =
    cover ||
    'https://i.pinimg.com/originals/25/2a/04/252a045199e33164a8b7577fc001851a.jpg';
  this.synopsis = synopsis || 'empty';
}
//PROTOTYPE
Book.prototype.info = function () {
  let read = '';
  if (this.readStatus === 'true') {
    read = 'already read';
  } else {
    read = 'not read yet';
  }
  return read;
};

//SEEDS: BOOK
const theHobbit = new Book(
  'The Hobbit',
  'J.R.R. Tolkien',
  295,
  'true',
  `https://res.cloudinary.com/demjqq8d3/image/upload/v1679886068/library/book0_dnoeio.jpg`,
  `The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by a dragon named Smaug. Bilbo's journey takes him from his light-hearted, rural surroundings into more sinister territory.`
);
const animalFarm = new Book(
  'Animal Farm',
  'George Orwell',
  86,
  'true',
  `https://res.cloudinary.com/demjqq8d3/image/upload/v1679886071/library/book1_il38em.jpg`,
  `It tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy. Ultimately, the rebellion is betrayed, and under the dictatorship of a pig named Napoleon, the farm ends up in a state as bad as it was before.`
);
const theGreatGatsby = new Book(
  'The Great Gatsby',
  'F. Scott Fitzgerald',
  208,
  'false',
  `https://res.cloudinary.com/demjqq8d3/image/upload/v1679886072/library/book2_qcvzwx.jpg`,
  `Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.`
);
const annaKarenina = new Book(
  'Anna Karenina',
  'Leo Tolstoy',
  864,
  'false',
  `https://res.cloudinary.com/demjqq8d3/image/upload/v1679886067/library/book3_pqgtz3.jpg`,
  `The story centers on an extramarital affair between Anna and dashing cavalry officer Count Alexei Kirillovich Vronsky that scandalizes the social circles of Saint Petersburg and forces the young lovers to flee to Italy in a search for happiness, but after they return to Russia, their lives further unravel.`
);
const donQuixote = new Book(
  'Don Quixote',
  'Miguel de Cervantes',
  1072,
  'false',
  `https://res.cloudinary.com/demjqq8d3/image/upload/v1679886068/library/book4_ntvml4.jpg`,
  `The plot revolves around the adventures of a member of the lowest nobility, an hidalgo from La Mancha named Alonso Quijano, who reads so many chivalric romances that he either loses or pretends to have lost his mind in order to become a knight-errant to revive chivalry and serve his nation, under the name Don Quixote de la Mancha.`
);
const mobydick = new Book(
  'Moby-Dick',
  'Herman Melville',
  135,
  'false',
  `https://res.cloudinary.com/demjqq8d3/image/upload/v1679886069/library/book5_vwh5cd.jpg`,
  ` The book is the sailor Ishmael's narrative of the maniacal quest of Ahab, captain of the whaling ship Pequod, for vengeance against Moby Dick, the giant white sperm whale that crippled him on the ship's previous voyage.`
);
const nineteenEightyFour = new Book(
  'Nineteen Eighty-Four',
  'George Orwell',
  328,
  'true',
  `https://res.cloudinary.com/demjqq8d3/image/upload/v1679886068/library/book6_s7jgal.jpg`,
  `Airstrip One, a province of the totalitarian superstate Oceania, is led by Big Brother, a dictatorial leader. Through the Ministry of Truth, the Party engages in surveillance, historical negationism, and propaganda to persecute individuality and independent thinking.`
);
const deathNote = new Book(
  'Death Note',
  'Tsugumi Ohba',
  392,
  'true',
  `https://res.cloudinary.com/demjqq8d3/image/upload/v1679886068/library/book7_ioqws2.jpg`,
  `Light Yagami discovers a mysterious notebook that grants him the supernatural ability to kill anyone whose name is written in its pages. The series centers around Light's attempts to use the Death Note to massacre people he deems immoral and to create a crime-free society, and the efforts of an elite task force, led by detective L, to apprehend him.`
);
const onePiece = new Book(
  'One Piece',
  'Eiichiro Oda',
  186,
  'true',
  `https://res.cloudinary.com/demjqq8d3/image/upload/v1679886069/library/book8_ekxhnz.jpg`,
  `Monkey D. Luffy, a 17-year-old boy that defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate who ransacks villages for fun, Luffy’s reason for being a pirate is one of pure wonder; the thought of an exciting adventure and meeting new and intriguing people, along with finding the One Piece.`
);

//INPUT: LIBRARY
let myLibrary = [];
function addBookToLibrary(...label) {
  //push to myLibrary
  myLibrary.push(...label);
}
addBookToLibrary(
  theHobbit,
  animalFarm,
  theGreatGatsby,
  annaKarenina,
  donQuixote,
  mobydick,
  nineteenEightyFour,
  deathNote,
  onePiece
);

//PROCESS DATA TO THE HTML
const bookShelf = document.querySelector('.bookshelf');
const showBooks = function () {
  //clear bookshelf
  while (bookShelf.firstChild) {
    bookShelf.removeChild(bookShelf.firstChild);
  }
  //fill the bookshelf with books
  for (let x = 0; x < myLibrary.length; x++) {
    //create div.bookcase
    const bookDisplay = document.createElement('DIV');
    bookDisplay.classList.add(`book${x}`, 'book-display');
    bookShelf.append(bookDisplay);
    //create img.cover
    const cover = document.createElement('IMG');
    cover.src = myLibrary[x].cover;
    cover.classList.add('cover');
    bookDisplay.append(cover);
    //create container: div.bookInfo
    const bookInfo = document.createElement('DIV');
    bookInfo.classList.add('book-info');
    bookDisplay.append(bookInfo);
    //create p.title
    const title = document.createElement('P');
    title.innerText = myLibrary[x].title;
    title.classList.add('title');
    bookInfo.append(title);
    //create p.author
    const author = document.createElement('P');
    author.innerText = myLibrary[x].author;
    author.classList.add('author');
    bookInfo.append(author);
    //create p.pages
    const pages = document.createElement('P');
    pages.innerText = `(${myLibrary[x].pages} pages)`;
    pages.classList.add('pages');
    // pages.style.display = 'none'
    pages.classList.add('hidden');
    bookInfo.append(pages);
    //create p.synopsis
    const synopsis = document.createElement('P');
    synopsis.innerText = myLibrary[x].synopsis;
    synopsis.classList.add('synopsis');
    // synopsis.style.display = 'none'
    synopsis.classList.add('hidden');
    bookInfo.append(synopsis);
    //create p.readStatus
    const readStatus = document.createElement('P');
    readStatus.innerText = `status: ${myLibrary[x].info()}`;
    readStatus.classList.add('readStatus');
    // readStatus.style.display = 'none'
    readStatus.classList.add('hidden');
    bookInfo.append(readStatus);
    //create button.delete
    const deleteBook = document.createElement('button');
    deleteBook.innerText = 'x';
    deleteBook.classList.add('deleteBook');
    // deleteBook.style.display = 'none'
    deleteBook.classList.add('hidden');
    bookDisplay.append(deleteBook);
    //event listener => show pages,synopsis,readStatus,deleteBook
    bookDisplay.addEventListener('click', function () {
      bookDisplay.classList.toggle('book-display-active');
      cover.classList.toggle('coverOnFocus');
      pages.classList.toggle('visible');
      synopsis.classList.toggle('visible');
      readStatus.classList.toggle('visible');
      deleteBook.classList.toggle('visible');
    });
    //event listener => deleteBook
    deleteBook.addEventListener('click', function () {
      const selectedBook = document.querySelector(`.book${x}`);
      selectedBook.remove();
      console.log('deleting ' + myLibrary[x].title);
      myLibrary.splice(x, 1);
    });
  }
};

// showBooks()

const proceedData = () => {
  const newForm = new FormData(form);
  const newInput = Object.fromEntries(newForm);
  console.log(newInput.inputRead);
  const newBook = new Book(
    newInput.inputTitle,
    newInput.inputAuthor,
    newInput.inputPages,
    newInput.inputRead,
    newInput.inputCover,
    newInput.inputSynopsis
  );
  addBookToLibrary(newBook);
  showBooks();
};

const wordRegExp = /([a-zA-Z0-9])\w+/;
const digitRegExp = /([0-9])\d+/;
const urlRegExp =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

const form = document.querySelector('FORM');
// const feedbacks = document.querySelectorAll('p.error');
const titleFeedback = document.querySelector('.title-feedback');
const authorFeedback = document.querySelector('.author-feedback');
const pagesFeedback = document.querySelector('.pages-feedback');
const synopsisFeedback = document.querySelector('.synopsis-feedback');
const coverFeedback = document.querySelector('.cover-feedback');

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const synopsis = document.querySelector('#synopsis');
const cover = document.querySelector('#cover');
//adding a new book

// window.addEventListener('load', () => {
//   const isValid = title.value.length === 0 || wordRegExp.test(title.value);
//   title.className = isValid ? 'valid' : 'invalid';
// });

title.addEventListener('input', () => {
  const isValid = title.value.length === 0 || wordRegExp.test(title.value);
  if (isValid) {
    title.className = 'valid';
    titleFeedback.textContent = 'Ah good one';
    titleFeedback.className = 'feedback-valid';
  } else {
    title.className = 'invalid';
  }
});
author.addEventListener('input', () => {
  const isValid = author.value.length === 0 || wordRegExp.test(author.value);
  if (isValid) {
    author.className = 'valid';
    authorFeedback.textContent = 'Never heard that one';
    authorFeedback.className = 'feedback-valid';
  } else {
    author.className = 'invalid';
  }
});
pages.addEventListener('input', () => {
  const isValid = pages.value.length === 0 || wordRegExp.test(pages.value);
  if (isValid) {
    pages.className = 'valid';
    pagesFeedback.textContent = "Wow that's thick one";
    pagesFeedback.className = 'feedback-valid';
  } else {
    pages.className = 'invalid';
  }
});
synopsis.addEventListener('input', () => {
  const isValid =
    synopsis.value.length === 0 || wordRegExp.test(synopsis.value);
  if (isValid) {
    synopsis.className = 'valid';
    synopsisFeedback.textContent = 'Never heard that one';
    synopsisFeedback.className = 'feedback-valid';
  } else {
    synopsis.className = 'invalid';
  }
});
cover.addEventListener('input', () => {
  const isValid = cover.value.length === 0 || wordRegExp.test(cover.value);
  if (isValid) {
    cover.className = 'valid';
    coverFeedback.textContent = 'Nice';
    coverFeedback.className = 'feedback-valid';
  } else {
    cover.className = 'invalid';
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // TITLE
  const titleValid = title.value.length === 0 || wordRegExp.test(title.value);
  if (!titleValid) {
    title.className = 'invalid';
    titleFeedback.textContent = 'Enter a book title, please';
    return (titleFeedback.className = 'feedback-invalid');
  }
  title.className = 'valid';
  titleFeedback.textContent = '';
  titleFeedback.className = 'feedback';
  // AUTHOR
  const authorValid =
    author.value.length === 0 || wordRegExp.test(author.value);
  if (!authorValid) {
    author.className = 'invalid';
    authorFeedback.textContent = 'Enter the author name, please';
    return (authorFeedback.className = 'feedback-invalid');
  }
  author.className = 'valid';
  authorFeedback.textContent = '';
  authorFeedback.className = 'feedback';
  // PAGES
  const pagesValid = pages.value.length === 0 || digitRegExp.test(pages.value);
  if (!pagesValid) {
    pages.className = 'invalid';
    pagesFeedback.textContent = 'Enter total amount of the page, please';
    return (pagesFeedback.className = 'feedback-invalid');
  }
  pages.className = 'valid';
  pagesFeedback.textContent = '';
  pagesFeedback.className = 'feedback';
  // SYNOPSIS
  const synopsisValid =
    synopsis.value.length === 0 || wordRegExp.test(synopsis.value);
  if (!synopsisValid) {
    synopsis.className = 'invalid';
    synopsisFeedback.textContent = 'Enter the book synopsis, please';
    return (synopsisFeedback.className = 'feedback-invalid');
  }
  synopsis.className = 'valid';
  synopsisFeedback.textContent = '';
  synopsisFeedback.className = 'feedback';
  // COVER
  const coverValid = cover.value.length === 0 || urlRegExp.test(cover.value);
  if (!coverValid) {
    cover.className = 'invalid';
    coverFeedback.textContent = 'Enter the url of the book cover, please';
    return (coverFeedback.className = 'feedback-invalid');
  }
  cover.className = 'valid';
  coverFeedback.textContent = '';
  coverFeedback.className = 'feedback';
  // PROCEED DATA INPUT
  proceedData()
});
