class Person {
    constructor(name = 'DefaultName', age = 0) {
        this.firstName = name.split(' ')[0]
        this.age = age
    }
    getGreeting() {
        return `hey this is ${this.firstName}`
    }
    getDescription() {
        return `${this.firstName} is ${this.age} years old`
    }
}


class Student extends Person {
    constructor(name, age, major = 'Nothing') {
        super(name, age); //Refer to the Parent Function as constructor will overwrite the parent constructor
        this.major = major
    }
    hasMajor() {
        return !!this.major //returning 'true' instead of this.major
    }
    getDescription() { //overwriting the parent method
        let description = super.getDescription()

        if (this.hasMajor()) {
            return description += `and studies ${this.major}`
        }
    }
}


class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting();
        return greeting += ` and is travelling from ${this.homeLocation}`
    }
}


console.log('\n', 1)
const me = new Person('Jonny Bones', 55);
console.log(me)
console.log(me.getGreeting())
console.log(me.getDescription())


console.log('\n', 2)
const other = new Person();
console.log(other)
console.log(other.getGreeting())
console.log(other.getDescription())


console.log('\n', 3)
const student1 = new Student('Kyle', 66, 'Biology')
console.log(student1)
console.log(student1.hasMajor());
console.log(student1.getDescription())


console.log('\n', 4)
const traveller1 = new Traveller('Jimmy', 22, 'London')
console.log(traveller1)
console.log(traveller1.getGreeting())

