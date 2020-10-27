import Person from './defaultExports.js'; //no curly braces as we can only import 1 thing from the exporter

const person1 = new Person('jonny');
person1.walk()