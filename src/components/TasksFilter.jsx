import React from 'react'

class TasksFilter extends React.Component
{
  render()
  {
    return (
      <React.Fragment>
        <span className="todo-count">1 items left</span>
          <ul className="filters">
            <li>
              <button className="selected">All</button>
            </li>
            <li>
              <button>Active</button>
            </li>
            <li>
              <button>Completed</button>
            </li>
          </ul>
          <button className="clear-completed">Clear completed</button>
      </React.Fragment>
    )
  }
}


export default TasksFilter
