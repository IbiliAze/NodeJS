console.log('\n', 1);
////////////
// From this
////////////

const taskFailed = true;
const taskStillGoing = true;

function taskCallback( callback, errorCallback ) {
    if (taskFailed) {
        errorCallback({
            name: "87UHFI",
            message: "Task failed"
        })
    }
    else if (taskStillGoing) {
        errorCallback({
            name: "384HIY",
            message: "Task took too long to process"
        })
    } else {
        callback({
            name: "234FDB",
            message: "Task completed successfully"
        })
    }
};

taskCallback((message) => {
    console.log(`Success: ${message.name} -> ${message.message}`);
}, (errorMessage) => {
    console.log(`Fail: ${errorMessage.name} -> ${errorMessage.message}`);
});



console.log('\n', 2);
/////////
//To this
/////////