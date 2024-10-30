import React, {Component} from 'react'
import uniqueId from 'lodash/uniqueId'

import Footer from './components/Footer'
import TaskList from './components/TaskList'
import NewTaskForm from './components/NewTaskForm'

export default class App extends Component {
  state = {task: '', tasks: []}
  
  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };
  handleSubmit = () => {
    const {task,  tasks} = this.state
    const id = uniqueId()
    if (task.trim()) this.setState({task: '' , tasks: [{task, id, isDone: false}, ...tasks]})
  }
  hadnleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.handleSubmit()
    }
  }
  handleRemove = (id) => {
    const {tasks} = this.state
    this.setState({tasks: tasks.filter(task => task.id !== id)})
  }
  handleDone = (id) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => 
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    }));
  };
  
  
  render() {
    const {task, tasks, isDone} = this.state
    return (
      <section className="todoapp">
        <NewTaskForm task={task} onChange={this.handleChange} onKeyDown={this.hadnleKeyDown} />
        <section className="main">
          <TaskList tasks={tasks} onRemove={this.handleRemove} handleDone={this.handleDone}/>
          <Footer />
        </section>
      </section>
    )
  }
}