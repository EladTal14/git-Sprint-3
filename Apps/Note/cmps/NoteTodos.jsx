// import { keepService } from "./services/keepService.js"
export class NoteTodos extends React.Component {

  state = {
    color: 'lightsteelblue',
    todos: []
  }

  componentDidMount() {
    console.log('Page is ready');
    this.loadTodos()
  }

  loadTodos = () => {
    this.setState({
      todos: this.props.info.todos
    }, () => console.log(this.state.todos))
  }

  onInputChange = (ev) => {
    const value = ev.target.value;
    const field = ev.target.name
    this.setState({ [field]: value })
  }

  onDeleteNote = (noteId) => {
    this.props.deleteNote(noteId)
  }

  onToggleTodo = (todoId) => {
    var todo = this.state.todos.find(todo => todo.id === todoId)
    todo.isDone = !todo.isDone
    this.setState({todos: [...this.state.todos]})
  }

  render() {
    const { color } = this.state
    const { id } = this.props
    const { label, todos } = this.props.info

    return (
      <div className="todos-note note-card" style={{ backgroundColor: color }}>
        <h3>{label}</h3>
        <ul>
          {todos.map((todo, idx) => {
            return <li key={idx} className={(todo.isDone) ? 'todo-done' : ''} onClick={() => this.onToggleTodo(todo.id)}>{todo.txt}</li>
          })}
        </ul>
        <div className="note-icons">
          <button><img src="../../../assets/css/apps/keep/img/list.png" alt="" /></button>
          <button><img src="../../../assets/css/apps/keep/img/pin.png" alt="" /></button>
          <button className="color-btn"><input className="change-color" type="color" onChange={this.onInputChange} name="color" /></button>
          <button onClick={() => this.onDeleteNote(id)}><img src="../../../assets/css/apps/keep/img/trash.png" alt="" /></button>
        </div>
      </div>
    )
  }
}

// className={(todo.isDone) ? 'todoDone' : ''} onClick={() => onToggleTodo(todo.id)}
