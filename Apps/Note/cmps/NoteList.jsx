import { NotePreview } from "./NotePreview.jsx"


export function NotesList({notes}) {

  return <section className="notes-list">
        {notes.map(note => {
            return <NotePreview key={note.id} note={note}/>
        })}
        </section>

}
