console.log('\n', 1)
// Class
export default class Person { //this is the only thing we are exporting
    constructor(name) {
        this.name = name;
    };
    walk() {
        console.log('walk');
        console.log(this);
    };
};

export function promote(){
    console.log('promoting');
};