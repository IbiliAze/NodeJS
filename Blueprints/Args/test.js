const fs = require('fs');

const getNotes = () => {
    return 'your note'
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title); // more efficient for this case

    // if (duplicateNotes.length === 0){
    //     notes.push({
    //         title: title,
    //         body: body
    //     });
    //     saveNotes(notes);
    // } else {
    //     console.log('Notes title taken');
    // }

    if (!duplicateNote) { //more efficient
            notes.push({
                title: title,
                body: body
            });
            saveNotes(notes);
        } else {
            console.log('Notes title taken');
    }
    
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => {
        return note.title !== title
    });
    saveNotes(notesToKeep);
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((item) => item.title === title);
    console.log(note.body);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
};