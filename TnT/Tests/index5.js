function mainfunc(var1, callback) {
    console.log(`printed ${var1} in mainfunc()`)
    callback();
};



mainfunc(212, () => {
    console.log(65765756);
});