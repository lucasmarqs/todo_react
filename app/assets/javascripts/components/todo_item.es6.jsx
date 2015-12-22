class TodoItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editing: false, title: props.todo.title }
  }

  handleDoubleClick () {
    this.setState({ editing: true })
  }

  handleBlur () {
    this.setState( { editing: false })
    this.props.updateTask({ new_title: this.state.title, title: this.props.todo.title })
  }

  handleTitleChange (e) {
    this.setState({ title: e.target.value })
  }

  render () {
    if (this.state.editing) {
      return (
        <li className="todoItem">
          <input value={ this.state.title }
            onChange={ this.handleTitleChange.bind(this) }
            onBlur={ this.handleBlur.bind(this) } />
        </li>
      );
    } else {
      return (
        <li className="todoItem">
          <input
            type="checkbox"
            checked={ this.props.todo.completed }
            onChange={ this.props.onToggle } />
          <label className={ this.props.todo.completed ? 'completed' : '' }
            onDoubleClick={ this.handleDoubleClick.bind(this) }>
            { this.props.todo.title }
          </label>
        </li>
      )
    }
  }
}
