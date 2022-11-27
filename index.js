import readline from 'readline-sync';
import { Book } from './modules/book.js';
import { Library } from './modules/library.js';
function formattingAuthorsName(author) {
  author = author.split('.');
  author = author.map(word => word[0].toUpperCase() + word.slice(1));
  author = author.join('.');
  return author;
}
function addNumbOfAdding() {
  for (let i = 0; i < 1;) {
    let NumbOfAdding = +readline.question(`How much books you want to add? To stop the operation don't enter anything.`);
    if (isFinite(NumbOfAdding)) return NumbOfAdding;
    if (isNaN(NumbOfAdding)) {
      console.log('Enter a number');
      continue;
    } else if (NumbOfAdding == '') return;
  }
}
function addNumbOfDeleting() {
  for (let i = 0; i < 1;) {
    let NumbOfDeleting = +readline.question(`How much books you want to delete? To stop the operation don't enter anything.`);
    if (isFinite(NumbOfDeleting)) return NumbOfDeleting;
    if (isNaN(NumbOfDeleting)) {
      console.log('Enter a number');
      continue;
    } else 
    if (NumbOfDeleting > ArrayOfBooks.length) {
      console.log('In our library not enough books for this.')
      continue;
    } else
    if (NumbOfDeleting == '') return;
  }
}
function createBook() {
  let NumbOfAdding = addNumbOfAdding();
  if (!isFinite(NumbOfAdding)) return;
  for (let i = 0; i < NumbOfAdding; i++) {
    let author = readline.question('Enter a author in format A.B.Smith.');
    author = formattingAuthorsName(author);
    let year = readline.question('Enter a year of issue.');
    let name = readline.question('Enter a name of book.');
    let book = new Book(author, year, name);
    Library.addBook(book);
  }
}
function findAndDelete() {
  let NumbOfDeleting = addNumbOfDeleting();
  if(!isFinite(NumbOfDeleting)) return;
};
createBook();
console.log(Library.ArrayOfBooks);