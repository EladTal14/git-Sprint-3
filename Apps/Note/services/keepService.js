import { storageService } from '../../../services/storage-service.js';
import { utilService } from '../../../services/utilService.js';

const KEY = 'notesDB'
export const keepService = {
    query,
    addNote,
    // remove,
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
                acc.push({txt: todo, doneAt: null})
                return acc
            }, [])
            break
    }
    const newNoteToAdd = {id:utilService.makeId(), type: newNote.type, info: newInfo}
    gNotes = [newNoteToAdd, ...gNotes]
    console.log(newInfo)
    _saveNotesToStorage()
    return Promise.resolve(gNotes)
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
            }
        },
        {   
            id: utilService.makeId(),
            type: "NoteText",
            isPinned: true,
            info: {
                txt: "I miss the summer!!"
            }
        },
        {
            id: utilService.makeId(),
            type: "NoteImg",
            info: {
                url: 'https://miro.medium.com/max/1050/0*LFS-oAro8b1qmeH9.jpg',
                title: "Me playing Mi"
            },
            style: {
                backgroundColor: "lightpink"
            }
        },
        {
            id: utilService.makeId(),
            type: "NoteTodos",
            info: {
                label: "How was it:",
                todos: [
                    { txt: "Do that", doneAt: null },
                    { txt: "Do this", doneAt: 187111111 }
                ]
            }
        },
        {
            id: utilService.makeId(),
            type: "NoteVideo",
            info: {
                url: 'https://www.youtube.com/watch?v=BjhW3vBA1QU',
                title: "My new favorit song"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
    ];
    return notes;
}

function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes)
}