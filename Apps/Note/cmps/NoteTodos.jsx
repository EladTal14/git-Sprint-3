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

  render() {
    const {color} = this.state
    const {label, todos} = this.props.info

    return (
      <div className="todos-note note-card" style={{backgroundColor:color}}>
        <h3>{label}</h3>
        <ul>
          {todos.map((todo, idx) => {
            return <li key={idx}>{todo.txt}</li>
          })}
        </ul>
      </div>
    )
  }
}
