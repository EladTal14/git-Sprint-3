import { AddNote } from "./cmps/AddNote.jsx";
import { NoteFilter } from "./cmps/NoteFilter.jsx";
import { NotesList } from "./cmps/NoteList.jsx";
import {keepService} from "./services/keepService.js"

export class KeepApp extends React.Component {

  state = {
    notes: [],
  }

  componentDidMount() {
    console.log('Page is ready');
    this.loadNotes()

}

loadNotes = () => {
  keepService.query()
      .then(notes => this.setState({ notes }, ()=> console.log(notes)))
}

addNote = (note) => {
  keepService.addNote(note)
    .then(notes => this.setState({notes}))
}

deleteNote = (noteId) => {;
  keepService.deleteNote(noteId)
    .then(() => this.loadNotes())
}

get notesToDisplay() {
  const {notes} = this.state
  return notes
}

  render() {
    const notesToShow = this.notesToDisplay
    return <section className="keep-app">
      <h1>Your Notes!</h1>
      <NoteFilter/>
      <AddNote addNote={this.addNote} />
      <NotesList notes={notesToShow} deleteNote={this.deleteNote}/>
    </section>

  }
}


