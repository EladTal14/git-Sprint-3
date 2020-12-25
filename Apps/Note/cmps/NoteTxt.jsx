import { keepService } from "../services/keepService.js"
export class NoteTxt extends React.Component {

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

  onTogglePin = (noteId) => {
    this.props.togglePin(noteId)
  }

  refInput = React.createRef();

  onChangeTxt = (ev) => {
    const value = ev.target.value;
    const field = ev.target.name
    this.setState({ [field]: value })
    keepService.updateTxt(value, this.props.id)
  }
  // onChangeTxt = () => {
  //   var newTxt = this.refInput.current.innerText
  //   keepService.updateTxt(newTxt, this.props.id)
  //   this.setState({ txt: newTxt })
  // }

  render() {
    const {color} = this.state
    const {id, isPinned} = this.props
    console.log(isPinned);
    const { txt } = this.props.info
    return (
      <div className="txt-note note-card" style={{ backgroundColor: color }}>
        <textarea name="txt" id="" cols="22" rows="3" style={{ backgroundColor: color }} value={txt} className="editble-txt" onChange={this.onChangeTxt}>{txt}</textarea>
        <div className="note-icons">
          <button><img src="./assets/css/apps/keep/img/txt.png" alt="" /></button>
          <button className={`${isPinned ? 'note-pinned' : '' } pin-button`}  onClick={() => this.onTogglePin(id)} ><img src="./assets/css/apps/keep/img/pin.png" alt="" /></button>
          <button className="color-btn"><input className="change-color" type="color" onChange={this.onInputChange} name="color" /></button>
          <button onClick={() => this.onDeleteNote(id)}><img src="./assets/css/apps/keep/img/trash.png" alt="" /></button>
        </div>
      </div>
    )
  }
  // render() {
  //   const {color} = this.state
  //   const {id} = this.props
  //   const { txt } = this.props.info
  //   return (
  //     <div className="txt-note note-card" style={{ backgroundColor: color }}>
  //       <div contentEditable="true" suppressContentEditableWarning={true} ref={this.refInput} onKeyUp={this.onChangeTxt}>{txt}</div>
  //       <div className="note-icons">
  //         <button><img src="../../../assets/css/apps/keep/img/txt.png" alt="" /></button>
  //         <button><img src="../../../assets/css/apps/keep/img/pin.png" alt="" /></button>
  //         <button className="color-btn"><input className="change-color" type="color" onChange={this.onInputChange} name="color"/></button>
  //         <button onClick={() => this.onDeleteNote(id)}><img src="../../../assets/css/apps/keep/img/trash.png" alt="" /></button>
  //       </div>
  //     </div>
  //   )
  // }
}
