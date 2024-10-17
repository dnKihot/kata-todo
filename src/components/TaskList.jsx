import React from 'react'

import Task from './Task'

class TaskList extends React.Component
{
  render()
  {
    return (
      <React.Fragment>
        <ul className="todo-list">
          { this.props.Todos.map((todo) => (
            <Task todo={ todo } key={ todo.id } />
          ))}
        </ul>
      </React.Fragment>
    )
  }
}


export default TaskList
