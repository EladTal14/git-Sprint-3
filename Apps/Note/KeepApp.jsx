import { AddNote } from "./cmps/AddNote.jsx";
import { NoteList } from "./cmps/NoteList.jsx";

export class MissEmail extends React.Component {

  componentDidMount() {
    console.log('Page is ready');
    this.loadNotes()

}

  render() {
    return <section className="keep-app">
      <h1>Miss Keep App</h1>
      <AddNote />
      <NoteList />
    </section>

  }
}


