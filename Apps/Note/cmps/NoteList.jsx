import { NotePreview } from "./NotePreview.jsx"
export function NotesList({ notes, deleteNote, togglePin }) {
    const pinnedNotes = notes.filter(note => note.isPinned)
    const unPinnedNotes = notes.filter(note => !note.isPinned)

    return <section className="notes-list">
        {pinnedNotes.map(note => {
            return <NotePreview key={note.id} note={note} deleteNote={deleteNote} togglePin={togglePin} />
        })}
        {unPinnedNotes.map(note => {
            return <NotePreview key={note.id} note={note} deleteNote={deleteNote} togglePin={togglePin} />
        })}
    </section>

}
