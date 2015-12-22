class TodoForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { title: '', completed: false }
  }

  handleSubmit (e) {
    e.preventDefault();

    let title = this.state.title.trim()

    if (!title) {
      return;
    }

    this.props.addTask(title)
    this.setState({ title: ''})
    console.log(this.state.title)
  }

  handleTitleChange (e) {
    this.setState({title: e.target.value})
  }
  render () {
    return (
      <form className="todoForm" onSubmit={ this.handleSubmit.bind(this) }>
        <input placeholder="Todo.."
               value={ this.state.title }
               onChange={ this.handleTitleChange.bind(this) } />
      </form>
    );
  }
}

