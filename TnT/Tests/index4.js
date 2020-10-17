const EventEmitter = require('events');
const emitter = new EventEmitter();


emitter.addListener('messageLogged', (arg) => {
    console.log(`listener is called`, arg);
});


const Logger = require('./logger');
const logger = new Logger();
log('message');

