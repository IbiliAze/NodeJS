console.log('\n', 1)
//////////
// Arrays
//////////
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const numbers = [1, 2, 3, 4, 5, 6];

const [a, b] = alphabet;
console.log(a,b);

const [a1,,,d] = alphabet;
console.log(a1,d);

const [a2,,,,e, ...rest] = alphabet;
console.log(a2, e, rest);



console.log('\n', 2)
// Combining arrays, ... means all 
const newArray = [...alphabet, ...numbers];
console.log(newArray)

// Same as above
const newArray2 = alphabet.concat(numbers);
console.log(newArray2)



console.log('\n', 3)
//////////
// Objects
//////////
const person = {
    name: 'Sally',
    age: 43,
    address: {
        city: 'London',
        state: 'Ealing'
    }
}

const {name, age} = person
console.log(name, age)



console.log('\n', 4)
// Mapping, so you can use default values again
const person2 = {
    name: 'Sally',
    age: 43,
    address: {
        city: 'London',
        state: 'Ealing'
    }
}

const {name: firstName, age: ageAgain} = person2
console.log(firstName, ageAgain)



console.log('\n', 4)
// Rest
const person3 = {
    name: 'Sally',
    age: 43,
    address: {
        city: 'London',
        state: 'Ealing'
    }
}

const {name: firstName2, age: ageAgain2, ...rest2} = person3
console.log(firstName2, ageAgain2, rest2)



console.log('\n', 5)
// If it doesn't exist
const person4 = {
    name: 'Sally',
    age: 43,
    address: {
        city: 'London',
        state: 'Ealing'
    }
}

const {name: firstName3, age: ageAgain3, favouriteFood = 'pineapple', ...rest3} = person4
console.log(firstName3, ageAgain3, rest3, favouriteFood)



console.log('\n', 6)
// Combining, where person6 overwrites person5
const person5 = {
    name: 'Sally',
    age: 43,
    address: {
        city: 'London',
        state: 'Ealing'
    }
}

const person6 = {
    name: 'Jonny',
    age: 63, 
    favouriteFoodAlso: 'apple'
}

const person7 = {...person5, ...person6}
console.log(person7)



////////////
// Functions
////////////
console.log('\n', 7)
// Basics
const printUser = function( { name, age } ) {
    console.log(name, age)
}

printUser(person6)



console.log('\n', 8)
// Also a paramter that doesn't exist in the obejct
const printUser2 = function( { name, age, favouriteFood='banana' } ) {
    console.log(name, age, favouriteFood)
}

printUser2(person6)



console.log('\n', 9)
// Assign a parameter IF it doesn't already exist
const printUser3 = function( { name, age, favouriteFoodAlso='banana' } ) {
    console.log(name, age, favouriteFood)
}

printUser3(person6)






















