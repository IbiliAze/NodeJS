let jobs = [
    { id:1, isActive:true },
    { id:2, isActive:true },
    { id:3, isActive:false },
    { id:4, isActive:true },
    { id:5, isActive:false },
];

console.log('\n', 1)
for (let job of jobs) {
    console.log(job);
};



console.log('\n', 2)
// forEach() function
jobs.forEach( (job) => {
    console.log(job);
});



console.log('\n', 3)
// Iterate through the whole array looking for matches. Think of Python FOR & IF & myList.APPEND() blocks
const activeJobs = jobs.filter((job) => job.isActive);
console.log(activeJobs);



console.log('\n', 4)
// same as above but looks for 1 match only, its more efficient
const activeJobs2 = jobs.find((job) => job.isActive);
console.log(activeJobs2);




console.log('\n', 5)
// mapping / transforming
colours = ['red', 'blue', 'white'];
const items = colours.map(item => `<li>${item}</li>`);     //automatically returns as there is only 1 line);
console.log(items);





console.log('\n', 6)
// for every item in array
const object1 = {
    'orgName': 'afenia'
}
const updateKeys = Object.keys(object1);
const allowedUpdates = ['isInUse', 'orgName', 'brand', 'model', 'siteName'];
const isValidOperation = updateKeys.every((updt) => allowedUpdates.includes(updt));
if (!isValidOperation) {
    return console.log('Invalid')
};
console.log('Its valid');





console.log('\n', 7)
// add to array
jobs.push({
    id: 6,
    isActive: true
});
console.log(jobs);





console.log('\n', 8)
// remove last item from array
const removed_item = jobs.pop();
console.log(jobs);





console.log('\n', 9)
// remove first item from array
const removed_item_first = jobs.shift();
console.log(jobs);





console.log('\n', 10)
// add to front array
jobs.unshift({
    id: 99,
    isActive: false
});
console.log(jobs);





console.log('\n', 11)
// start at index:2 remove:1 item
jobs.splice(2, 1);
console.log(jobs);





console.log('\n', 12)
// start at index:2, remove:0, add at index:2, (Can replace with remove:1)
jobs.splice(2, 0, {
    id: 98,
    isActive: true
});
console.log(jobs);





console.log('\n', 13)
// print the item index
console.log(jobs.indexOf( { id: 5, isActive: false } ));


