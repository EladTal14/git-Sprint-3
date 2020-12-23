import { storageService } from './storageService.js';
import { utilService } from './utilService.js';

const KEY = 'notesDB'
export const keepService = {
    query,
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
            type: "NoteImg",
            info: {
                url: "http://some-img/me",
                title: "Me playing Mi"
            },
            style: {
                backgroundColor: "#00d"
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
                url: "http://some-video/me",
                title: "Me playing Mi"
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