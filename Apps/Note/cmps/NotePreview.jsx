import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { NoteTxt } from './NoteTxt.jsx'
import { NoteVideo } from './NoteVideo.jsx'

export class NotePreview extends React.Component {

  render() {
    const { note, deleteNote } = this.props
    return (
        <DynamicNoteCmp typeCmp={note.type} info={note.info} id={note.id} deleteNote={deleteNote} />
    )
  }
}


function DynamicNoteCmp({ typeCmp, info, id, deleteNote }) {
  switch (typeCmp) {
    case 'NoteText':
      return <NoteTxt info={info} id={id} deleteNote={deleteNote}/>
    case 'NoteImg':
      return <NoteImg info={info} id={id} deleteNote={deleteNote}/>
    case 'NoteTodos':
      return <NoteTodos info={info} id={id} deleteNote={deleteNote}/>
    case 'NoteVideo':
      return <NoteVideo info={info} id={id} deleteNote={deleteNote}/>
    default:
      <h2>hey!</h2>
  }
}
