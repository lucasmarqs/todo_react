class TodoFilter extends React.Component {
  render () {
    return (
      <div className="todoFilter">
        <a href="#" onClick={ () => this.props.changeFilter('all') }
          className={ this.props.currentFilter == 'all' ? 'selected' : '' }>
          All
        </a> |&nbsp;
        <a href="#completed" onClick={ () => this.props.changeFilter('completed') }
          className={ this.props.currentFilter == 'completed' ? 'selected' : '' }>
          Completed
        </a> |&nbsp;
        <a href="#incompleted" onClick={ () => this.props.changeFilter('incompleted') }
          className={ this.props.currentFilter == 'incompleted' ? 'selected' : '' }>
          Incompleted
        </a>
      </div>
    );
  }
}

