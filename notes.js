const fs = require("fs");

const addNote = (title, body) => {
    
    console.log("Hii");
    const notes = loadNotes();
    const foundItem=notes.find((note) => note.title===title);
    if(!foundItem){
    console.log(notes);
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes);
    console.log("New Note Added")
}else{
    console.log("no duplicate allowed");
}
}

const removeNote = (title) => {
    const notes = loadNotes();
    const remNote=notes.filter((note) => note.title!=title);
    if(remNote.length===remNote){
        console.log("item not found");

    }
    else{
        saveNotes(remNote);
        console.log("removed successfully");
    }

}
const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJson);

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataBuffer);
    } catch (err) {
        return []
    }

}
const readNote= () => {
    const notes=loadNotes();
    notes.forEach((note) => {console.log(note.title)});
}
const view= (title) => {
    console.log(title);
    const notes=loadNotes();
    console.log(notes);
    const singleNote=notes.find((note) => {return note.title===title});
    console.log(singleNote.title,singleNote.body);

    
}
module.exports = {
    addNote,
    removeNote,
    readNote,
    view
};