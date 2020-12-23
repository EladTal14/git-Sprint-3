import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { NoteTxt } from './NoteTxt.jsx'
import { NoteVideo } from './NoteVideo.jsx'

export class NotePreview extends React.Component {

  render() {
    const { note } = this.props
    return (
        <DynamicNoteCmp typeCmp={note.type} info={note.info}/>
    )
  }
}


function DynamicNoteCmp({ typeCmp, info }) {
  switch (typeCmp) {
    case 'NoteText':
      return <NoteTxt info={info} />
    case 'NoteImg':
      return <NoteImg info={info} />
    case 'NoteTodos':
      return <NoteTodos info={info} />
    case 'NoteVideo':
      return <NoteVideo info={info} />
    default:
      <h2>hey!</h2>
  }
}
