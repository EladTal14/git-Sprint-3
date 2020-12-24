
export class NoteImg extends React.Component {
  
  state = {
    color: 'lightpink',
    // txt: ''
  }

  // add get note by id
  // setTxt = () =>{
  //   this.setState({
  //     txt: this.props.info.txt
  //   })
  // }

  onInputChange = (ev) => {
    const value = ev.target.value;
    const field = ev.target.name
    this.setState({ [field]: value })
  }

  onDeleteNote = (noteId) => {
    this.props.deleteNote(noteId)
  }

  render() {
    const {color} = this.state
    const {id} = this.props
    const {url, txt} = this.props.info

    return (
      <div className="img-note note-card" style={{backgroundColor:color}}>
        <img src={url} alt=""/>
        <h3>{txt}</h3>
        <div className="note-icons">
          <button><img src="../../../assets/css/apps/keep/img/picture.png" alt="" /></button>
          <button><img src="../../../assets/css/apps/keep/img/pin.png" alt="" /></button>
          <button className="color-btn"><input className="change-color" type="color" onChange={this.onInputChange} name="color"/></button>
          <button onClick={() => this.onDeleteNote(id)}><img src="../../../assets/css/apps/keep/img/trash.png" alt="" /></button>
        </div>
      </div>
    )
  }
}
