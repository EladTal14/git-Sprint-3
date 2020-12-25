import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { NoteTxt } from './NoteTxt.jsx'
import { NoteVideo } from './NoteVideo.jsx'

export class NotePreview extends React.Component {

  render() {
    const { note, deleteNote, togglePin } = this.props
    return (
        <DynamicNoteCmp typeCmp={note.type} info={note.info} id={note.id} deleteNote={deleteNote} color={note.style} isPinned={note.isPinned} togglePin={togglePin}/>
    )
  }
}


function DynamicNoteCmp({ typeCmp, info, id, deleteNote, color, isPinned, togglePin }) {
  switch (typeCmp) {
    case 'NoteText':
      return <NoteTxt info={info} id={id} deleteNote={deleteNote} color={color} isPinned={isPinned} togglePin={togglePin}/>
    case 'NoteImg':
      return <NoteImg info={info} id={id} deleteNote={deleteNote} color={color} isPinned={isPinned} togglePin={togglePin}/>
    case 'NoteTodos':
      return <NoteTodos info={info} id={id} deleteNote={deleteNote} color={color} isPinned={isPinned} togglePin={togglePin}/>
    case 'NoteVideo':
      return <NoteVideo info={info} id={id} deleteNote={deleteNote} color={color} isPinned={isPinned} togglePin={togglePin}/>
    default:
      <h2>hey!</h2>
  }
}
