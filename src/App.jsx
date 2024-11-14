import React, {Component} from 'react'
import uniqueId from 'lodash/uniqueId'

import Footer from './components/Footer'
import TaskList from './components/TaskList'
import NewTaskForm from './components/NewTaskForm'


export default class App extends Component {
  state = {task: '', tasks: [], filter: 'All'}
   
  handleChange = e => this.setState({ task: e.target.value });
  
  handleSubmit = () => {
    const { task } = this.state;
    if (task.trim().length) {
      const newTask = { task, id: uniqueId(), isDone: false,  isEditing: false,};
      this.setState((prevState) => ({tasks: [newTask, ...prevState.tasks], task: ''}));
    }
  };
  
  handleRemove = id => this.setState( prevState => ({tasks: prevState.tasks.filter(task => task.id !== id)}));
  
  handleDone = (id) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task) 
    }));
  };
  
  handleToggleEdit = (id) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => task.id === id ? { ...task, isEditing: !task.isEditing } : task)
    }));
  };
  
  handleTaskEdit = (id, newText) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => 
        task.id === id ? { ...task, task: newText } : task
      )
    }));
  }
  
  handleFilterChange = (e) => {
    const {innerText} = e.target
    this.setState({filter: innerText})
    if(innerText == 'Complited') {
      const complited =  this.state.tasks.filter(task => task.isDone)
      this.setState({tasks: complited})
    }
  }

  render() {
    const {task, tasks, filter} = this.state
    let filteredTasks = tasks;
    if (filter === 'Active') filteredTasks = tasks.filter(task => !task.isDone);
    if (filter === 'Completed') filteredTasks = tasks.filter(task => task.isDone);
    
    
    return (
      <section className="todoapp">
        <NewTaskForm task={task} onChange={this.handleChange} onKeyDown={e => e.key === 'Enter' && this.handleSubmit()} />
        <section className="main">
          
          <TaskList 
            tasks={filteredTasks} 
            onRemove={this.handleRemove} 
            handleDone={this.handleDone} 
            handleToggleEdit={this.handleToggleEdit}
            handleChange={this.handleChange}     
            handleTaskEdit={this.handleTaskEdit}
          />
            
          <Footer handleFilterChange={this.handleFilterChange} filter={filter} />
        </section>
      </section>
    )
  }
}




