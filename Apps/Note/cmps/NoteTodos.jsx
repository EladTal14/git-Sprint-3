export class NoteTodos extends React.Component {
 
  state = {
    color: 'lightsteelblue',
    // txt: ''
  }

  // add get note by id
  // setTxt = () =>{
  //   this.setState({
  //     txt: this.props.info.txt
  //   })
  // }

  onDeleteNote = (noteId) => {
    this.props.deleteNote(noteId)
  }

  render() {
    const {color} = this.state
    const {id} = this.props
    const {label, todos} = this.props.info

    return (
      <div className="todos-note note-card" style={{backgroundColor:color}}>
        <h3>{label}</h3>
        <ul>
          {todos.map((todo, idx) => {
            return <li key={idx}>{todo.txt}</li>
          })}
        </ul>
        <div className="note-icons">
          <button><img src="../../../assets/css/apps/keep/img/list.png" alt="" /></button>
          <button><img src="../../../assets/css/apps/keep/img/pin.png" alt="" /></button>
          <button><img src="../../../assets/css/apps/keep/img/color.png" alt="" /></button>
          <button onClick={() => this.onDeleteNote(id)}><img src="../../../assets/css/apps/keep/img/trash.png" alt="" /></button>
        </div>
      </div>
    )
  }
}
