const fs = require('fs');

console.log('\n', 1)
const book = {
    title: "Book1",
    author: 'You of course'
};

const bookJSON = JSON.stringify(book);
console.log(typeof(bookJSON));


// WRITE
console.log('\n', 2)
const parsedData = JSON.parse(bookJSON);
console.log(typeof(parsedData));

fs.writeFileSync('file.json', bookJSON);


// READ
console.log('\n', 3)
const data = fs.readFileSync('file.json').toString();
const dataObject = JSON.parse(data);

console.log(data);
console.log(dataObject);