import { AddNote } from "./cmps/AddNote.jsx";
import { NoteList } from "./cmps/NoteList.jsx";

export function KeepApp() {
  return <section className="keep-app">
    <h1>Miss Keep App</h1>
    <AddNote />
    <NoteList />
  </section>
}


