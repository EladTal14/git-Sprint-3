
export class AddNote extends React.Component {

  state = {
    txt: 'What\'s on your mind...',
    newCmp: {
      note: '',
      type: 'NoteText',
    }
  }

  onAddNote = (ev) => {
    ev.preventDefault();
    this.props.addNote(this.state.newCmp)
    const copyCmp = {... this.state.newCmp}
    copyCmp.note = ''
    this.setState({newCmp: copyCmp})
  }

  onInputChange = (ev) => {
    const value = ev.target.value;
    const field = ev.target.name
    const copyCmp = { ...this.state.newCmp, [field]: value }
    this.setState({ newCmp: copyCmp })

  }

  onChangeType = (noteType, placeholderTxt) => {
    const copyCmp = { ...this.state.newCmp }
    copyCmp.type = noteType
    this.setState({
      newCmp: copyCmp,
      txt: placeholderTxt,
    })
  }


  render() {
    const { note } = this.state.newCmp
    return (
      <section className="note-form">
        <form onSubmit={this.onAddNote}>

          <input value={note} placeholder={this.state.txt} type="text" name="note"
            className="new-note-input" onChange={this.onInputChange} autoComplete="off" />

          <button type="button" onClick={() => this.onChangeType('NoteText', 'What\'s on your mind...')}><img src="./assets/css/apps/keep/img/txt.png" alt="" /></button>
          <button type="button" onClick={() => this.onChangeType('NoteImg', 'Enter image url')}><img src="./assets/css/apps/keep/img/picture.png" alt="" /></button>
          <button type="button" onClick={() => this.onChangeType('NoteVideo', 'Enter video url')}><img src="./assets/css/apps/keep/img/video.png" alt="" /></button>
          <button type="button" onClick={() => this.onChangeType('NoteTodos', 'Enter comma separated list')}><img src="./assets/css/apps/keep/img/list.png" alt="" /></button>
          <button type="submit" className="add-note-btn">Add</button>
        </form>

      </section>
    )
  }
}
