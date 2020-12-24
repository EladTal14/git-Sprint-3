import { storageService } from '../../../services/storage-service.js';
import { utilService } from '../../../services/utilService.js';

const KEY = 'notesDB'
export const keepService = {
    query,
    addNote,
    deleteNote,
    updateTxt,
    saveColor,
    // save,
    // getById,
};

var gNotes;
_createNotes();

function _createNotes() {
    // Try loading from localStorage
    gNotes = storageService.loadFromStorage(KEY);
    if (!gNotes || !gNotes.length) {
        // Nothing in localStorage, use demo data
        gNotes = _getDemoNotes()
        _saveNotesToStorage();
    }
}

function addNote(newNote){
    console.log('adding new note', newNote);
    var newInfo = {}
    switch (newNote.type){
        case "NoteText":
            newInfo.txt = newNote.note
            break;
        case "NoteImg" || "NoteVideo":
            newInfo.url = newNote.note
            break;
        case "NoteTodos":
            var todosTxt = newNote.note.split(',')
            newInfo.todos = todosTxt.reduce((acc, todo) => {
                acc.push({txt: todo, doneAt: null, id: utilService.makeId()})
                return acc
            }, [])
            break
    }
    const newNoteToAdd = {id:utilService.makeId(), type: newNote.type, info: newInfo, style: 'lightskyblue'}
    gNotes = [newNoteToAdd, ...gNotes]
    console.log(newInfo)
    _saveNotesToStorage()
    return Promise.resolve(newNoteToAdd)
}

function deleteNote(noteId){
   gNotes = gNotes.filter(note => note.id !== noteId)
   _saveNotesToStorage()
   return Promise.resolve()
}

// function getNoteById(noteId){

// }

// function getIdxById(noteId){
//     var idx = gNotes.findIndex(note => note.id === noteId)
//     return idx
// }

function updateTxt(newTxt,noteId ){
    // console.log('txt', newTxt, 'id', noteId);
    const note = gNotes.find(note => note.id === noteId)
    const idx = gNotes.findIndex(note => note.id === noteId)
    const noteToUpdate = {...note}
    noteToUpdate.info.txt = newTxt
    const notesToUpdate = [... gNotes]
    notesToUpdate[idx] = noteToUpdate
    gNotes = notesToUpdate
    _saveNotesToStorage()
    return Promise.resolve(noteToUpdate)
    
}

function saveColor(color, noteId){
    console.log('color', color, 'id', noteId);
    const note = gNotes.find(note => note.id === noteId)
    const idx = gNotes.findIndex(note => note.id === noteId)
    const noteToUpdate = {...note}
    noteToUpdate.style = color
    const notesToUpdate = [... gNotes]
    notesToUpdate[idx] = noteToUpdate
    gNotes = notesToUpdate
    _saveNotesToStorage()
    return Promise.resolve(noteToUpdate)
}

function query() {
    return Promise.resolve(gNotes);
}


function _getDemoNotes() {
    const notes = [
        {   
            id: utilService.makeId(),
            type: "NoteText",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!"
            },
            style: "lightgreen"
        },
        {   
            id: utilService.makeId(),
            type: "NoteText",
            isPinned: true,
            info: {
                txt: "I miss the summer!!"
            },
            style: "lightgreen"
        },
        {
            id: utilService.makeId(),
            type: "NoteImg",
            info: {
                url: 'https://miro.medium.com/max/1050/0*LFS-oAro8b1qmeH9.jpg',
                txt: "Me playing Mi"
            },
            style: "lightpink"

        },
        {
            id: utilService.makeId(),
            type: "NoteTodos",
            info: {
                label: "How was it:",
                todos: [
                    { txt: "Do that", doneAt: null, id: utilService.makeId(), isDone: false },
                    { txt: "Do this", doneAt: 187111111, id: utilService.makeId(), isDone: false }
                ]
            },
            style: "lightsteelblue"
        },
        {
            id: utilService.makeId(),
            type: "NoteVideo",
            info: {
                url: 'https://www.youtube.com/embed/watch?v=BjhW3vBA1QU',
                txt: "My new favorit song"
            },
            style: "#ffffd2"

        },
    ];
    return notes;
}

function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes)
}