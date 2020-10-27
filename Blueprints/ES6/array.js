console.log('\n', 1)
// Print each item of array
const jobs = [
    { id:1, isActive:true },
    { id:2, isActive:true },
    { id:3, isActive:false },
    { id:4, isActive:true },
    { id:5, isActive:false },
];

for (let job in jobs) {
    console.log(jobs[job]);
};



console.log('\n', 2)
// forEach() function
jobs.forEach( (job) => {
    console.log(job);
});



console.log('\n', 3)
// Iterate through array looking for matches. Think of Python FOR & IF blocks
const activeJobs = jobs.filter((job) => {
    return job.isActive;
});
console.log(activeJobs)




console.log('\n', 4)
// mapping / transforming
colours = ['red', 'blue', 'white'];
const items = colours.map(item => `<li>${item}</li>`);     //automatically returns as there is only 1 line);
console.log(items)



