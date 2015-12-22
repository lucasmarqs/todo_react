class TodoBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = { todos: props.todos, filter: 'all' }
  }

  onToggle (todo) {
    let todos = this.state.todos
    todos.find(t => t.title == todo.title).completed = !todo.completed
    this.setState({todos})
  }

  addTask (title) {
    let todos = this.state.todos
    todos.push({title: title, completed: false})
    this.setState({todos})
  }

  filteredTodos () {
    if(this.state.filter == 'completed')
      return this.state.todos.filter(todo => todo.completed )
    else if(this.state.filter == 'incompleted')
      return this.state.todos.filter(todo => !todo.completed)
    else
      return this.state.todos
  }

  changeFilter (filter) {
    this.setState({ filter: filter })
  }

  updateTask (updatedTodo) {
    let todos = this.state.todos
    todos.find(t => t.title == updatedTodo.title).title = updatedTodo.new_title
    this.setState({todos})
  }

  render () {
    return (
      <div className="todoBox">
        <h1>Todo</h1>
        <TodoForm addTask={ (title) => this.addTask(title) } />
        <TodoList todos={ this.filteredTodos() }
          onToggle={ (todo) => this.onToggle(todo) }
          updateTask={ (updatedTodo) => this.updateTask(updatedTodo) } />
        <TodoFilter currentFilter={ this.state.filter } changeFilter={ (filter) => this.changeFilter(filter) } />
      </div>
    );
  }
}

