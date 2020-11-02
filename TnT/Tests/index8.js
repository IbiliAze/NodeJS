

const taskPromise = (a, b) => {
    const calculations = a + b;
    return new Promise((resolve, reject) => {
        if (calculations < 0 || calculations > 1000) {
            reject(calculations);
        }
        resolve(calculations);
    });
};


const doWork = async (a,b) => {
    try {
        const result1 = await taskPromise(a, b);
        const result2 = await taskPromise(result1, b);
        const result3 = await taskPromise(result2, b);
        console.log(result1);
        console.log(result2);
        console.log(result3);
        return result3;
    } catch(error) {
        console.log('error', error);
    }
};

doWork(23, 91);