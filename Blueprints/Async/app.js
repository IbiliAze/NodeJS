const weather = require('./callback');



weather('kalbajar', '774e6c2166990c9ef0de1c4eca7977c4', (error, response) => {
    if (error){
        console.log(error);
    } else {
        console.log(response);
    }
});
