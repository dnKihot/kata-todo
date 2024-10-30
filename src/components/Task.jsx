import React, {Component} from 'react';
import cn from 'classnames'

export default class Task extends Component {
  render() {
    const {value, onRemove, handleDone, isDone} = this.props
    console.log(this.props)
    return (
          <li className={cn({completed: isDone})}>
            <div className="view">
              <input className="toggle" type="checkbox" onClick={handleDone}/>
              <label>
                <span className="description">{value}</span>
                <span className="created">created 5 minutes ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy" onClick={onRemove}></button>
            </div>
          </li>
    )
  }
}
{/* <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>
                <span className="description">Completed task</span>
                <span className="created">created 17 seconds ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
          </li>
          <li className="editing">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>
                <span className="description">Editing task</span>
                <span className="created">created 5 minutes ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
            <input type="text" className="edit" value="Editing task" />
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>
                <span className="description">Active task</span>
                <span className="created">created 5 minutes ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
          </li> */}