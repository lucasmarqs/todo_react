class TodoList extends React.Component {
  render () {
    let todoNodes = this.props.todos.map((todo) => {
      return (
        <TodoItem todo={ todo }
          onToggle={ () => this.props.onToggle(todo) }
          updateTask={ (updatedTodo) => this.props.updateTask(updatedTodo) } />
      )
    })

    return (
      <ul className="todoList">
        { todoNodes }
      </ul>
    )
  }
}

