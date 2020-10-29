console.log('\n', 1)
// Print each item of array
const jobs = [
    { id:1, isActive:true },
    { id:2, isActive:true },
    { id:3, isActive:false },
    { id:4, isActive:true },
    { id:5, isActive:false },
];

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



