console.log('\n', 1)
// Basics
const square = (number) => {
    return number**2
};

console.log(square(5))



console.log('\n', 2)
// Same as above
const square2 = number => number**2

console.log(square2(5))



console.log('\n', 2)
// arrow functions are bad for methods
const tasks = {
    tasks: [
        {
            text: "shopping",
            completed: true
        },
        {
            text: "eating",
            completed: true
        },
        {
            text: "sleeping",
            completed: false
        },
        {
            text: "filming",
            completed: false
        }
    ],
    getTasksTool() {
        return this.tasks.filter((task) =>  task.completed === false)
    }
};
console.log(tasks.getTasksTool());