const myfunc = () => {
    console.log('inside')
    return 6
}

console.log('\n', 1)
console.log(myfunc())


console.log('\n', 2)
console.log(myfunc)


console.log('\n', 3)
const myvar = myfunc()
console.log(myvar)


console.log('\n', 4)
const myvar2 = myfunc
console.log(myvar2)


console.log('\n', 5)
myvar2()