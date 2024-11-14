import React, {Component} from 'react';
import TaskFilter from './TaskFilter'

export default class Footer extends Component {
  render() {
    const {handleFilterChange, filter, handleClearCompleted, activeTasks} = this.props
    return (
      <footer className="footer">
          <span className="todo-count">{`${activeTasks} Item left`}</span>
          <TaskFilter handleFilterChange={handleFilterChange} filter={filter}/>
          <button className="clear-completed" onClick={handleClearCompleted}>Clear completed</button>
        </footer>
    )
  }
}