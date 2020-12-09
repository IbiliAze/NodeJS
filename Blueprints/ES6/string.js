console.log('\n', 1)
// Basics
let data = '  Hello this is: Some Random data'
console.log(data.length)



console.log('\n', 2)
// Uppercase & Lowercase
console.log(data.toUpperCase().toLowerCase())



console.log('\n', 3)
// Includes
console.log(data.includes('this is'))



console.log('\n', 4)
// Trim, remove trailing whitespaces
console.log(data.trim())



console.log('\n', 5)
// Split
console.log(data.split(':'))



console.log('\n', 6)
// Split with indexes
const string = '#0f527928-e437-4304-9e31-82a703bcd142'
const splitted = string.substring(0,3) //0=index of string like arrays, 3=end after x number of characters
const splitted2 = string.substring(2) 
console.log(splitted)
console.log(splitted2)

