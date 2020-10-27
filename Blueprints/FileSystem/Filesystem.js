const fs = require('fs');

fs.writeFileSync('notes.txt', 'hello');

fs.appendFileSync('notes.txt', 'another hello');