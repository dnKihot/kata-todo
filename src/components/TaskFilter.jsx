import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default class TaskFilter extends Component {
  render() {
    const {handleFilterChange, filter} = this.props
    return (
          <ul className="filters">
            <li>
              <button className={cn({selected: filter === 'All'})} onClick={handleFilterChange}>All</button>
            </li>
            <li>
              <button className={cn({selected: filter === 'Active'})} onClick={handleFilterChange}>Active</button>
            </li>
            <li>
              <button className={cn({selected: filter === 'Completed'})} onClick={handleFilterChange}>Completed</button>
            </li>
          </ul>
    )
  }
}


TaskFilter.propTypes = {
  filter: PropTypes.string.isRequired, 
  handleFilterChange: PropTypes.func.isRequired, 
};

TaskFilter.defaultProps = {
  filter: 'All', 
};