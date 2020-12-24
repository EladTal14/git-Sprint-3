import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { NoteTxt } from './NoteTxt.jsx'
import { NoteVideo } from './NoteVideo.jsx'

export class NotePreview extends React.Component {

  render() {
    const { note, deleteNote } = this.props
    return (
        <DynamicNoteCmp typeCmp={note.type} info={note.info} id={note.id} deleteNote={deleteNote} color={note.style}/>
    )
  }
}


function DynamicNoteCmp({ typeCmp, info, id, deleteNote, color }) {
  switch (typeCmp) {
    case 'NoteText':
      return <NoteTxt info={info} id={id} deleteNote={deleteNote} color={color}/>
    case 'NoteImg':
      return <NoteImg info={info} id={id} deleteNote={deleteNote} color={color}/>
    case 'NoteTodos':
      return <NoteTodos info={info} id={id} deleteNote={deleteNote} color={color}/>
    case 'NoteVideo':
      return <NoteVideo info={info} id={id} deleteNote={deleteNote} color={color}/>
    default:
      <h2>hey!</h2>
  }
}
