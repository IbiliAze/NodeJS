console.log('\n', 1)
// Basics
let mybook = {
    title: `book1`,
    author: 'author',
    pageCount: 345,
    checkAvailability: function (titleName) {
        return this.author + titleName
    }
};

// mybook.checkAvailability(mybook.title)
console.log(mybook)
console.log(mybook.checkAvailability('a'))
