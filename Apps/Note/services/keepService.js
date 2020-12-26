import { storageService } from '../../../services/storage-service.js';
import { utilService } from '../../../services/utilService.js';

const KEY = 'notesDB'
export const keepService = {
    query,
    addNote,
    deleteNote,
    updateTxt,
    saveColor,
    togglePin,
    updateLable,
    saveNewTodo,
};

var gNotes;
_createNotes();

function _createNotes() {
    gNotes = storageService.loadFromStorage(KEY);
    if (!gNotes || !gNotes.length) {
        gNotes = _getDemoNotes()
        _saveNotesToStorage();
    }
}

function addNote(newNote) {
    var newInfo = {}
    switch (newNote.type) {
        case "NoteText":
            newInfo.txt = newNote.note
            break;
        case "NoteImg" || "NoteVideo":
            newInfo.url = newNote.note
            break;
        case "NoteTodos":
            var todosTxt = newNote.note.split(',')
            newInfo.todos = todosTxt.reduce((acc, todo) => {
                acc.push({ txt: todo, doneAt: null, id: utilService.makeId() })
                return acc
            }, [])
            break
    }
    const newNoteToAdd = { id: utilService.makeId(), type: newNote.type, info: newInfo, style: 'lightskyblue' }
    gNotes = [newNoteToAdd, ...gNotes]
    _saveNotesToStorage()
    return Promise.resolve(newNoteToAdd)
}

function deleteNote(noteId) {
    gNotes = gNotes.filter(note => note.id !== noteId)
    _saveNotesToStorage()
    return Promise.resolve()
}

function togglePin(noteId) {
    const note = gNotes.find(note => note.id === noteId)
    const idx = gNotes.findIndex(note => note.id === noteId)
    note.isPinned = !note.isPinned
    const notesToUpdate = [...gNotes]
    notesToUpdate[idx] = note
    gNotes = notesToUpdate
    _saveNotesToStorage()
    return Promise.resolve(notesToUpdate)
}

function updateTxt(newTxt, noteId) {
    const note = gNotes.find(note => note.id === noteId)
    const idx = gNotes.findIndex(note => note.id === noteId)
    const noteToUpdate = { ...note }
    noteToUpdate.info.txt = newTxt
    const notesToUpdate = [...gNotes]
    notesToUpdate[idx] = noteToUpdate
    gNotes = notesToUpdate
    _saveNotesToStorage()
    return Promise.resolve(noteToUpdate)
}

function saveNewTodo(newTodo, noteId) {
    const note = gNotes.find(note => note.id === noteId)
    const idx = gNotes.findIndex(note => note.id === noteId)
    const noteToUpdate = { ...note }
    const notesToUpdate = [...gNotes]
    noteToUpdate.info.todos.unshift({ txt: newTodo, doneAt: null, id: utilService.makeId(), isDone: false })
    notesToUpdate[idx] = noteToUpdate
    gNotes = notesToUpdate
    _saveNotesToStorage()
    return Promise.resolve(noteToUpdate)
}

function saveColor(color, noteId) {
    const note = gNotes.find(note => note.id === noteId)
    const idx = gNotes.findIndex(note => note.id === noteId)
    const noteToUpdate = { ...note }
    noteToUpdate.style = color
    const notesToUpdate = [...gNotes]
    notesToUpdate[idx] = noteToUpdate
    gNotes = notesToUpdate
    _saveNotesToStorage()
    return Promise.resolve(noteToUpdate)
}

function updateLable(newLabel, noteId) {
    const note = gNotes.find(note => note.id === noteId)
    const idx = gNotes.findIndex(note => note.id === noteId)
    const noteToUpdate = { ...note }
    noteToUpdate.info.label = newLabel
    const notesToUpdate = [...gNotes]
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
            style: "#9ff59f"
        },
        {
            id: utilService.makeId(),
            type: "NoteVideo",
            isPinned: false,
            info: {
                url: 'https://www.youtube.com/embed/3X9wEwulYhk',
                txt: "My new favorite song"
            },
            style: "#fefdca"

        },
        {
            id: utilService.makeId(),
            type: "NoteImg",
            isPinned: true,
            info: {
                url: './assets/img/belle1.jpeg',
                txt: "My Dog playing"
            },
            style: "lightpink"

        },
        {
            id: utilService.makeId(),
            type: "NoteTodos",
            isPinned: false,
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
            type: "NoteText",
            isPinned: false,
            info: {
                txt: "I miss the summer!!"
            },
            style: "#9ff59f"
        },
        {
            id: utilService.makeId(),
            type: "NoteTodos",
            isPinned: true,
            info: {
                label: "Don\'t forget:",
                todos: [
                    { txt: "Have Fun", doneAt: null, id: utilService.makeId(), isDone: false },
                    { txt: "Eat good", doneAt: 187111111, id: utilService.makeId(), isDone: true },
                    { txt: "Take a nap", doneAt: 187111111, id: utilService.makeId(), isDone: false },
                ]
            },
            style: "lightsteelblue"
        },
        {
            id: utilService.makeId(),
            type: "NoteImg",
            isPinned: false,
            info: {
                url: './assets/img/view.jpg',
                txt: "sooo beautiful"
            },
            style: "lightpink"

        },
        {
            id: utilService.makeId(),
            type: "NoteText",
            isPinned: false,
            info: {
                txt: "Sprint 3 is all most done!"
            },
            style: "lightgreen"
        },
        {
            id: utilService.makeId(),
            type: "NoteVideo",
            isPinned: false,
            info: {
                url: 'https://www.youtube.com/embed/lWA2pjMjpBs', 
                txt: "Party!!"
            },
            style: "#fefdca"
        },
        {
            id: utilService.makeId(),
            type: "NoteText",
            isPinned: false,
            info: {
                txt: "Whatching now: Dark, Dark is a German science fiction thriller"
            },
            style: "lightgreen"
        },
    ];
    return notes;
}

function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes)
}

// https://www.youtube.com/embed/I3qvi4wHNns