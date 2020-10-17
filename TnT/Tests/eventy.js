const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('run', (data) => {
    console.log('running now');
    console.log(data);
});


let count = 0;
ee.emit('run', count)

count += 10
ee.emit('run', count)

count += 10
ee.emit('run', count)

count += 10
ee.emit('run', count)