function Human(name) {
    this.name = name;
    this.talks = function() {
        console.log('I can speak');
    };
    let age = 21;
    Object.defineProperty(this, 'age', {
        get: () => {
            return age;
        }
    });
};


human1 = new Human('jon');
console.log(human1.age);