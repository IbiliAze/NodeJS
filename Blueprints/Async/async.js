//
console.log('\n', 1)
// Example 1

const doWork = async () => {
    return 4 //Fulfilling the promise
    throw new Error('something done broke') //rejecting the promise
};

doWork().then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


//
console.log('\n', 2)
// Example 2 with Await

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0  || b < 0) {
                return reject('Numbers must be positive');
            }

            resolve(a + b);
        }, 2000);
    })
};

const doWorkAgain = async () => {
    const sum = await add(1, 99);
    const sum2 = await add(sum, 50);
    const sum3 = await add(sum2, 3);
    return sum3
};

doWorkAgain().then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});