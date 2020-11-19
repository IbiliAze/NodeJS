const sort = {};
const list = ['completedAt', 'ascending'];
sort[list[0]] = list[1] === 'ascending' ? 1 : 0

console.log(sort)

// sort is an empty object
// we create and Key Value pair
// key is list[0] => 'completedAt'
// value is 1 IF list[1] === 'acending'