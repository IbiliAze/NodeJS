console.log('\n', 1)
// Class
export class Person {
    constructor(name) {
        this.name = name;
    };
    walk() {
        console.log('walk');
        console.log(this);
    };
};