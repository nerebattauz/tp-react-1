
import './App.css'
import InputTask from './components/InputTask'
import SelectFilter from './components/SelectFilter'
import SendButton from './components/SendButton'
import TasksContainer from './components/TasksContainer'
import Task from './components/Task'
import { tasks } from './tasks'

function App() {

  return (
    <>
      <h1>To Do List</h1>
      <form className='form'>
        <div>
      <InputTask/>
      <SelectFilter/>
      </div>
      <SendButton/>
      </form>
      <TasksContainer>{tasks.map((task) => <Task key={task.id} text={task.text}/>)}</TasksContainer>
    </>
  )
}

export default App
