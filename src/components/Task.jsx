import React, {Component} from 'react';


export default class Task extends Component {
  render() {
    const {task, onRemove, handleDone, handleToggleEdit} = this.props
    return (
          
            <div className="view">
              <input className="toggle" type="checkbox" onChange={handleDone}/>
              <label>
                <span className="description">{task}</span>
                <span className="created">created 5 minutes ago</span>
              </label>
              <button className="icon icon-edit" onClick={handleToggleEdit}></button>
              <button className="icon icon-destroy" onClick={onRemove}></button>
            </div>
    )
  }
}
