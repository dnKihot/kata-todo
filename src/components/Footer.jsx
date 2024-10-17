import React from 'react'

import TasksFilter from './TasksFilter'

class Footer extends React.Component
{
  render()
  {
    return (
      <React.Fragment>
         <footer className="footer">
          <TasksFilter />
        </footer>
      </React.Fragment>
    )
  }
}


export default Footer
