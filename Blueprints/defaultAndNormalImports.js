import Person, { promote } from './defaultAndNormalExports.js'; //import both named default and normal exports

const person1 = new Person('jonny');
person1.walk();

promote();