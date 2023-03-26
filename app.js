//CONSTRUCTOR: BOOK
function Book(title, author, pages, synopsis, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.synopsis = synopsis
    this.readStatus = readStatus
}
//PROTOTYPE
Book.prototype.info = function () {
    let read = ''
    if (this.readStatus === true) {
        read = 'already read'
    } else {
        read = 'not read yet'
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${read}`
}

//SEEDS: BOOK
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, `The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by a dragon named Smaug. Bilbo's journey takes him from his light-hearted, rural surroundings into more sinister territory.`, false)
const animalFarm = new Book('Animal Farm', 'George Orwell', 86, `It tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy. Ultimately, the rebellion is betrayed, and under the dictatorship of a pig named Napoleon, the farm ends up in a state as bad as it was before.`, true)
// const theGreatGatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 208, true)
// const annaKarenina = new Book('Anna Karenina', 'Leo Tolstoy', 864, false)
// const donQuixote = new Book('Don Quixote', 'Miguel de Cervantes', 1072, false)
// const mobydick = new Book('Moby-Dick', 'Herman Melville', 135, true)
// const nineteenEightyFour = new Book('Nineteen Eighty-Four', 'George Orwell', 328, true)

//INPUT: LIBRARY
let myLibrary = [];
function addBookToLibrary(...label) {
    //push to myLibrary
    myLibrary.push(...label)
}
//theGreatGatsby, annaKarenina, donQuixote, mobydick, nineteenEightyFour
addBookToLibrary(theHobbit, animalFarm);

//PROCESS DATA TO THE HTML
const bookShelf = document.querySelector('.bookshelf');