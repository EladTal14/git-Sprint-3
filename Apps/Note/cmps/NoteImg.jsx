import { keepService } from "../services/keepService.js"
export class NoteImg extends React.Component {

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

  onDeleteNote = (noteId) => {
    this.props.deleteNote(noteId)
  }

  onChangeTxt = (ev) => {
    const value = ev.target.value;
    const field = ev.target.name
    this.setState({ [field]: value })
    keepService.updateTxt(value, this.props.id)
  }

  render() {
    const { color } = this.state
    const { id } = this.props
    const { url, txt } = this.props.info

    return (
      <div className="img-note note-card" style={{ backgroundColor: color }}>
        <img src={url} alt="" />
        {/* <h3>{txt}</h3> */}
        <input type="text" name="txt" value={txt} className="editble-title" onChange={this.onChangeTxt} style={{ backgroundColor: color }} placeholder="giv me a title!"/>
        <div className="note-icons">
          <button><img src="./assets/css/apps/keep/img/picture.png" alt="" /></button>
          <button><img src="./assets/css/apps/keep/img/pin.png" alt="" /></button>
          <button className="color-btn"><input className="change-color" type="color" onChange={this.onInputChange} name="color" /></button>
          <button onClick={() => this.onDeleteNote(id)}><img src="./assets/css/apps/keep/img/trash.png" alt="" /></button>
        </div>
      </div>
    )
  }
}
