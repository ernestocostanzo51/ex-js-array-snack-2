import {books} from "../books.js"

const ages = books.map(age => age.author.age)
console.log(ages)

const agesSum = ages.reduce((accumulator, age) => accumulator + age)
console.log(agesSum)

console.log(agesSum / ages.length)