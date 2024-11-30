import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskFilter from './TaskFilter';

export default class Footer extends Component {
  render() {
    const { handleFilterChange, filter, handleClearCompleted, activeTasks } =
      this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{`${activeTasks} Item left`}</span>
        <TaskFilter handleFilterChange={handleFilterChange} filter={filter} />
        <button className="clear-completed" onClick={handleClearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}

Footer.propTypes = {
  activeTasks: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  handleClearCompleted: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  filter: 'All',
};
