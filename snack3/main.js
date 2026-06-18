import {books} from "../books.js"

const authors = books.map(a => a.author)
console.log(authors)

const areAuthorsAdults = books.some(a => a.author.age >18)
console.log(areAuthorsAdults)

authors.sort((a , b) => b.age - a.age)
console.log(authors)

