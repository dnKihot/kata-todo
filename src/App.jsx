import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';

import Footer from './components/Footer';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';

export default class App extends Component {
  state = { task: '', tasks: [], filter: 'All', currentTime: new Date() };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handleChange = (e) => this.setState({ task: e.target.value });

  handleSubmit = () => {
    const { task } = this.state;
    if (task.trim().length) {
      const newTask = {
        task,
        id: uniqueId(),
        isDone: false,
        isEditing: false,
        created: new Date(),
      };
      this.setState((prevState) => ({
        tasks: [newTask, ...prevState.tasks],
        task: '',
      }));
    }
  };

  handleRemove = (id) =>
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));

  handleDone = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    }));
  };

  handleToggleEdit = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task,
      ),
    }));
  };

  handleTaskEdit = (id, newText) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, task: newText } : task,
      ),
    }));
  };

  handleFilterChange = (e) => this.setState({ filter: e.target.innerText });

  handleClearCompleted = () => {
    const { tasks } = this.state;
    const complited = tasks.filter((task) => !task.isDone);
    this.setState({ tasks: complited });
  };

  render() {
    const { task, tasks, filter, currentTime } = this.state;
    let filteredTasks = tasks;
    if (filter === 'Active')
      filteredTasks = tasks.filter((task) => !task.isDone);
    if (filter === 'Completed')
      filteredTasks = tasks.filter((task) => task.isDone);
    const activeTasks = tasks.filter((task) => !task.isDone).length;

    return (
      <section className="todoapp">
        <NewTaskForm
          task={task}
          onChange={this.handleChange}
          onKeyDown={(e) => e.key === 'Enter' && this.handleSubmit()}
        />
        <section className="main">
          <TaskList
            tasks={filteredTasks}
            currentTime={currentTime}
            onRemove={this.handleRemove}
            handleDone={this.handleDone}
            handleToggleEdit={this.handleToggleEdit}
            handleChange={this.handleChange}
            handleTaskEdit={this.handleTaskEdit}
          />

          <Footer
            handleFilterChange={this.handleFilterChange}
            activeTasks={activeTasks}
            filter={filter}
            handleClearCompleted={this.handleClearCompleted}
          />
        </section>
      </section>
    );
  }
}
