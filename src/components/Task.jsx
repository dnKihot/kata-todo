import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

export default class Task extends Component {
  state = {
    currentTime: new Date(),
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {
      task,
      onRemove,
      handleDone,
      handleToggleEdit,
      created,
    } = this.props;

  
    const { currentTime } = this.state;

    
    const timeAgo = formatDistanceToNow(new Date(created), {
      addSuffix: true,
      baseDate: currentTime,
    });

    return (
      <div className="view">
        <input className="toggle" type="checkbox" onChange={handleDone} />
        <label>
          <span className="description">{task}</span>
          <span className="created">created {timeAgo}</span>
        </label>
        <button className="icon icon-edit" onClick={handleToggleEdit}></button>
        <button className="icon icon-destroy" onClick={onRemove}></button>
      </div>
    );
  }
}

Task.propTypes = {
  task: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
  handleToggleEdit: PropTypes.func.isRequired,
  created: PropTypes.instanceOf(Date).isRequired,
};

Task.defaultProps = {
  currentTime: new Date(),
};
