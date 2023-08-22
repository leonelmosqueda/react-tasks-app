import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react';
import { tasks as data } from '../tasks';

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length + 1,
      description: task.description
    }]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  )
}

TaskContextProvider.propTypes = {
  children: PropTypes.node
}
