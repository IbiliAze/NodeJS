console.log('\n', 1)
// Class
class Person {
    constructor(name) {
        this.name = name;
    };
    walk() {
        console.log('walk');
        console.log(this);
    };
    
};

const person1 = new Person('jon');
person1.walk()




console.log('\n', 2)
// Inheritence with parent constructor
class Teacher extends Person {
    teach() {
        console.log('teach');
    };
};

const teacher = new Teacher('jonny'); // the argument is inherited from the Person class
teacher.teach();                      // from the Teacher class
teacher.walk();                       // the method is inherited from the Person class




console.log('\n', 3)
// Inheritence with parent constructor and child constructor
class Teacher2 extends Person {
    constructor(name, degree) {
        super(name);                  // this will initialise the name property from the parent class
        this.degree = degree;
    }
    teach() {
        console.log('teach');
    };
};

const teacher2 = new Teacher2('jonny', 'msc.maths'); // the argument is inherited from the Person class
teacher2.teach();                                   // from the Teacher class
teacher2.walk();                                    // the method is inherited from the Person class
console.log(teacher2.degree);



