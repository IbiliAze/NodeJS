function Human(name) {
    this.name = name;
    this.talks = function() {
        console.log('I can speak');
    };
    let age = 21;
    Object.defineProperty(this, 'age', {
        get: () => {
            return age;
        },
        set: (value) => {
            if (!value) {
                throw new Error('Invalid age');
            }
            age = value;
        }
    });
};


human1 = new Human('jon');
human1.age = 34
console.log(human1.age);