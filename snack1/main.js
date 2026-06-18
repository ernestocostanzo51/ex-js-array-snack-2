import { books } from '../books.js';

const longsBook = books.filter(book => book.pages > 300)
console.log(longsBook)

const longsBookTitles = longsBook.map(book => book.title)
console.log(longsBookTitles)