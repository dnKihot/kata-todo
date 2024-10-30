import React, {Component} from 'react';
import Task from './Task'

export default class TaskList extends Component {
  render() {
    const {tasks, onRemove,  handleDone} = this.props
    return (
      <ul className="todo-list">
          {tasks.map(({task, id, isDone}) => 
            <Task value={task} key={id} 
              onRemove={() => onRemove(id)} 
              handleDone={() => handleDone(id)}
              isDone={isDone}
              />
            )}        
        </ul>
    )
  }
}