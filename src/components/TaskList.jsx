import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Task from './Task';

export default class TaskList extends Component {
  render() {
    const { tasks, onRemove, handleDone, handleToggleEdit, handleTaskEdit } =
      this.props;

    return (
      <ul className="todo-list">
        {tasks.map(({ task, id, isDone, isEditing, created }) => (
          <li
            key={id}
            className={cn({ completed: isDone, editing: isEditing })}
          >
            <form onSubmit={(e) => e.preventDefault()}>
              <Task
                task={task}
                onRemove={() => onRemove(id)}
                handleDone={() => handleDone(id)}
                handleToggleEdit={() => handleToggleEdit(id)}
                isEditing={isEditing}
                created={created}
              />
              {isEditing && (
                <input
                  type="text"
                  className="edit"
                  value={task}
                  key={id}
                  onChange={(e) => handleTaskEdit(id, e.target.value)}
                  onKeyDown={(e) => e.key == 'Enter' && handleToggleEdit(id)}
                />
              )}  
            </form>
          </li>
        ))}
      </ul>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
      isDone: PropTypes.bool,
      isEditing: PropTypes.bool,
      created: PropTypes.instanceOf(Date).isRequired,
    }),
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
  handleToggleEdit: PropTypes.func.isRequired,
  handleTaskEdit: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  tasks: [],
};
