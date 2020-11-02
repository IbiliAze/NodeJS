const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000)
    })
};

// From This (a lot of nesting and duplicate codes)
// add(3,4).then((sum) => {
//     console.log(sum);
//     add(sum, 23).then((sum2) => {
//         console.log(sum2);
//     }).catch((error2) => {
//         console.log(error);
//     })
// }).catch((error) => {
//     console.log(error);
// });


// To This (cleaner)
add(3,4).then((sum) => {
    console.log(sum);
    return add(sum, 23);
}).then((sum2) => {
    console.log(sum2);
}).catch((error) => {
    console.log(error);
});