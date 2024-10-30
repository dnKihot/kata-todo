import React, {Component} from 'react';
import TaskFilter from './TaskFilter'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
          <span className="todo-count">1 items left</span>
          <TaskFilter />
          <button className="clear-completed">Clear completed</button>
        </footer>
    )
  }
}