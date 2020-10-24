console.log('\n', 1)
// This will refrence the Global Object (Window in browers, Global in NodeJS)
console.log(this);


console.log('\n', 2)
// This will refrence the Object, where This will become the object
const video = {
    title: "video1",
    play() {
        console.log(this)
        console.log(this.title)
    }
};
video.play();



console.log('\n', 3)
// Adding to the Video Object
video.stop = function() {
    console.log(this)
    console.log(this.title)
};
video.stop();



console.log('\n', 4)
// Normal functions are global so therefore This wil refrence the window/global object
function myfunc(){
    console.log(this);
};



console.log('\n', 5)
// Constructor
function Video(title) {
    this.title = title;             // this will show up in This
    this.provider = 'netflix';      // this will show up in This
    const founded = '1990'          // this won't show up in This
    console.log(this);
}
const video1 = new Video('mytitle') // new creates an empty object as such {} and This becomes this new object
                                    // then the object is populated with this.title
console.log(video1);



console.log('\n', 6)
// This within a method
const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        console.log(this);
        this.tags.forEach(element => {
            console.log(element)
        });
    }
};
video2.showTags()
console.log(video1);



console.log('\n', 7)
// This within a function of a method, is a normal function
const video3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        console.log(this);
        this.tags.forEach( function(element) {
            console.log(this.title, element);
        }, this);
    }
};
video3.showTags()



console.log('\n', 8)
// Simplify the above with an arrow function, so we can refrence the Object with This
const video4 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        console.log(this);
        this.tags.forEach(element => {
            console.log(this.title, element);
        });
    }
};
video4.showTags()



