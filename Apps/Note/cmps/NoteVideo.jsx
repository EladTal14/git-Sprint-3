import { keepService } from "../services/keepService.js"
export class NoteVideo extends React.Component {

  state = {
    color: '',
    txt: ''
  }

  componentDidMount() {
    this.loadTxtAndColor()
  }

  loadTxtAndColor = () => {
    this.setState({
      txt: this.props.info.txt,
      color: this.props.color
    })
  }

  onInputChange = (ev) => {
    const value = ev.target.value;
    const field = ev.target.name
    this.setState({ [field]: value })
    keepService.saveColor(value, this.props.id)
  }

  onChangeTxt = (ev) => {
    const value = ev.target.value;
    const field = ev.target.name
    this.setState({ [field]: value })
    keepService.updateTxt(value, this.props.id)
  }

  onTogglePin = (noteId) => {
    this.props.togglePin(noteId)
  }

  onDeleteNote = (noteId) => {
    this.props.deleteNote(noteId)
  }

  render() {
    const { color } = this.state
    const { id, isPinned } = this.props
    const { url, txt } = this.props.info

    return (
      <div className="video-note note-card" style={{ backgroundColor: color }}>
        <iframe width="260" height="230"
          src={url} className="note-picture" >
        </iframe>
        <input type="text" name="txt" value={txt} className="editble-title" onChange={this.onChangeTxt} style={{ backgroundColor: color }} placeholder="give me a title!" />
        <div className="note-icons">
          <button><img src="./assets/css/apps/keep/img/video.png" alt="" /></button>
          <button className={`${isPinned ? 'note-pinned' : ''} pin-button`} onClick={() => this.onTogglePin(id)} ><img src="./assets/css/apps/keep/img/pin.png" alt="" /></button>
          <button className="color-btn"><input className="change-color" type="color" onChange={this.onInputChange} name="color" /></button>
          <button onClick={() => this.onDeleteNote(id)}><img src="./assets/css/apps/keep/img/trash.png" alt="" /></button>
        </div>
      </div>
    )
  }
}
