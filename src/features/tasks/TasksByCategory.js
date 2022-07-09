import React from 'react'
import { selectTasksByCategoryId } from './tasksSlice'

const TasksByCategory = () => {
  const tasks = selectTasksByCategoryId
  return (
    <div>TasksByCategory</div>
  )
}

export default TasksByCategory