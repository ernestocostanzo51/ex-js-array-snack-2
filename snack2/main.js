import {books} from "../books.js"

const availableBooks = books.filter(book => book.available === true)
console.log(availableBooks)

const discountedBooks = availableBooks.map(book => +(parseFloat(book.price) * 0.80).toFixed(2));
console.log(discountedBooks)

const fullPricedBook = discountedBooks.find(price => Number.isInteger(price));

console.log(fullPricedBook);
