import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  render() {
    const { task, onChange, onKeyDown } = this.props;
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={task}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </header>
    );
  }
}

NewTaskForm.propTypes = {
  task: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

NewTaskForm.defaultProps = {
  task: '',
};
