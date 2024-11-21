import React from 'react'
import Task from './Task'
import { tasks } from "../tasks";

const TasksContainer = ({children}) => {
  return (
    <div className='task-container'>
      {children}
    </div>
  )
}

export default TasksContainer
