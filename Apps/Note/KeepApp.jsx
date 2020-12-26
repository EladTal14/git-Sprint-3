import { AddNote } from "./cmps/AddNote.jsx";
import { NoteFilter } from "./cmps/NoteFilter.jsx";
import { NotesList } from "./cmps/NoteList.jsx";
import { keepService } from "./services/keepService.js"
import { eventBusService } from "../../services/eventBusService.js"

export class KeepApp extends React.Component {

  state = {
    filterBy: {
      name: '',
      type: '',
    },
    notes: [],
  }

  componentDidMount() {
    this.loadNotes()
  }

  loadNotes = () => {
    keepService.query()
      .then(notes => this.setState({ notes }))
  }

  addNote = (note) => {
    keepService.addNote(note)
      .then(addedNote => this.setState({ notes: [addedNote, ...this.state.notes] }))
      .then(() => eventBusService.emit('showMsg', 'Note Added'))
  }

  deleteNote = (noteId) => {
    keepService.deleteNote(noteId)
      .then(() => this.loadNotes())
      .then(()=> eventBusService.emit('showMsg', 'Note Deleted'))
  }

  togglePin = (noteId) => {
    keepService.togglePin(noteId)
      .then(() => this.loadNotes())
  }

  onSetFilter = (filterBy) => {
    this.setState({ filterBy });
  }

  get notesToDisplay() {
    const { notes, filterBy } = this.state
    const filterRegex = new RegExp(filterBy.name, 'i');
    const filterRegexType = new RegExp(filterBy.type, 'i');
    return notes.filter(note => filterRegex.test(note.info.txt) && filterRegexType.test(note.type));
  }

  render() {
    const notesToShow = this.notesToDisplay
    return <section className="keep-app">
      <NoteFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />
      <AddNote addNote={this.addNote} />
      <NotesList notes={notesToShow} deleteNote={this.deleteNote} togglePin={this.togglePin} />
    </section>

  }
}


