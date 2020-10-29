const yargs = require('yargs');
const notes = require('./test');

// console.log('\n', 1)
// console.log(process.argv);


// console.log('\n', 2)
// for (let i of process.argv) {
//     console.log(i)
// };


// console.log('\n', 3) //not very useful
// const command = process.argv[2];
// if ( command === 'add' ) {
//     console.log('adding')
// } else if ( command === 'remove' ) {
//     console.log('removing')
// }


// console.log('\n', 4)
// console.log(yargs.argv);


// our app version
console.log('\n', 5)
yargs.version('1.1.1');


// adding commands
console.log('\n', 6)
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Comment',
            demandOption: false,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    } 
});

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    } 
});

yargs.command({
    command: 'read',
    describe: 'describe a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

yargs.parse()