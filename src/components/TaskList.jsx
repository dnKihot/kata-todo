import React, {Component} from 'react';
import cn from 'classnames'
import Task from './Task'

export default class TaskList extends Component {
    
  render() {
    const {tasks, onRemove,  handleDone, handleToggleEdit, handleTaskEdit} = this.props
    
    return (
      <ul className="todo-list">
          {tasks.map(({task, id, isDone, isEditing}) => 
            <li key={id} className={cn({completed: isDone, editing: isEditing})}>
              <Task 
              task={task}  
              onRemove={() => onRemove(id)} 
              handleDone={() => handleDone(id)}
              handleToggleEdit={() => handleToggleEdit(id)}
              isEditing={isEditing}
              />
              {isEditing && 
              <input 
                type="text" 
                className="edit" value={task} key={id} 
                onChange={(e) => handleTaskEdit(id, e.target.value)} 
                onKeyDown={(e) => e.key == 'Enter' && handleToggleEdit(id)} />}
            </li>
          )}        
        </ul>
    )
  }
  
};

