import React, {Component} from 'react';

export default class NewTaskForm extends Component {
  render() {
    const {task, onChange, onKeyDown} = this.props
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" 
        placeholder="What needs to be done?" 
        autoFocus 
        value={task}
        onChange={onChange}
        onKeyDown={onKeyDown}
        />
      </header>
    )
  }
}