import React from 'react'

class NewTaskForm extends React.Component
{

  state = {
      title: '',
      completed: false,
      editing: false
  }

  add(e)
  {
    this.setState({ title: e.target.value })

    if(e.key == 'Enter')
      this.props.add({ id: Date.now(), ...this.state })
  }


  render()
  {
    return (
      <React.Fragment>
         <header className="header">
            <h1 onClick={ () => this.props.add() }>todos</h1>
            <input className="new-todo" 
                   placeholder="What needs to be done?" 
                   onKeyUp={ (e) => this.add(e) } 
                   
                   autofocus        
            />
          </header>
      </React.Fragment>
    )
  }
}


export default NewTaskForm
