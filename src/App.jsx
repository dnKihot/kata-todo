import React from 'react'

import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'
import Footer from './components/Footer'

class App extends React.Component
{

  state = {
    Todos: []
  }

  add(todo)
  {
    this.setState({ Todos: [ ...this.state.Todos, todo ]})
  }



  render()
  {
    return (
      <React.Fragment>
        <section className="todoapp">
          <NewTaskForm add={ this.add.bind(this) }/>

          <section className="main">
            <TaskList Todos={ this.state.Todos }/>

          </section>

          <Footer />
        </section>
      </React.Fragment>
    )
  }
}


export default App
