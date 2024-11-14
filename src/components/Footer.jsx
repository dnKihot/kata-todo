import React, {Component} from 'react';
import TaskFilter from './TaskFilter'

export default class Footer extends Component {
  render() {
    const {handleFilterChange, filter} = this.props
    return (
      <footer className="footer">
          <span className="todo-count">1 items left</span>
          <TaskFilter handleFilterChange={handleFilterChange} filter={filter}/>
          <button className="clear-completed">Clear completed</button>
        </footer>
    )
  }
}