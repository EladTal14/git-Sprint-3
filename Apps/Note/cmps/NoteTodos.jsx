import { keepService } from "../services/keepService.js"
export class NoteTodos extends React.Component {

  state = {
    color: '',
    todos: [],
    label: '',
    newTodo: '',
  }

  componentDidMount() {
    this.loadTodos()
    this.loadColor()
  }

  loadTodos = () => {
    this.setState({
      todos: this.props.info.todos
    })
  }

  loadColor = () => {
    this.setState({
      color: this.props.color
    })
  }

  onInputChange = (ev) => {
    const value = ev.target.value;
    const field = ev.target.name
    this.setState({ [field]: value })
    keepService.saveColor(value, this.props.id)
  }

  onChangeTodo = (ev) => {
    const value = ev.target.value;
    const field = ev.target.name
    this.setState({ [field]: value })
  }

  onAddTodo = () => {
    keepService.saveNewTodo(this.state.newTodo, this.props.id)
      .then(() => this.loadTodos())
      .then(() => this.setState({newTodo: ''}))
  }

  onDeleteNote = (noteId) => {
    this.props.deleteNote(noteId)
  }

  onTogglePin = (noteId) => {
    this.props.togglePin(noteId)
  }

  onToggleTodo = (todoId) => {
    var todo = this.state.todos.find(todo => todo.id === todoId)
    todo.isDone = !todo.isDone
    this.setState({ todos: [...this.state.todos] })
  }

  onChangeLabel = (ev) => {
    const value = ev.target.value;
    const field = ev.target.name
    this.setState({ [field]: value })
    keepService.updateLable(value, this.props.id)
  }

  render() {
    const { color, newTodo } = this.state
    const { id, isPinned } = this.props
    const { label, todos } = this.props.info

    return (
      <div className="todos-note note-card" style={{ backgroundColor: color }}>
        <input type="text" name="label" value={label} className="editble-title" onChange={this.onChangeLabel} style={{ backgroundColor: color }} placeholder="Add a title" />
        <ul>
          {todos.map((todo, idx) => {
            return <li key={idx} className={(todo.isDone) ? 'todo-done' : ''} onClick={() => this.onToggleTodo(todo.id)}>{todo.txt}</li>
          })}
        </ul>
        <div className="new-todo-add">
          <input type="text" name="newTodo" value={newTodo} className="editble-todo" onChange={this.onChangeTodo} style={{ backgroundColor: color }} placeholder="I need to do..." />
          <button onClick={this.onAddTodo}><img src="./assets/css/apps/mail/img/compose-btn.png" alt=""/></button>
        </div>

        <div className="note-icons">
          <button><img src="./assets/css/apps/keep/img/list.png" alt="" /></button>
          <button className={`${isPinned ? 'note-pinned' : ''} pin-button`} onClick={() => this.onTogglePin(id)} ><img src="./assets/css/apps/keep/img/pin.png" alt="" /></button>
          <button className="color-btn"><input className="change-color" type="color" onChange={this.onInputChange} name="color" /></button>
          <button onClick={() => this.onDeleteNote(id)}><img src="./assets/css/apps/keep/img/trash.png" alt="" /></button>
        </div>
      </div>
    )
  }
}

