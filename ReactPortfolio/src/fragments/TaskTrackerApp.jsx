import {useState} from "react"

const TaskTrackerApp = () => {
  const [taskName, setTaskName] = useState("")
  const [taskDate, setTaskDate] = useState("")
  const [taskList, setTaskList] = useState([])

  const handleNameChange = e => setTaskName(e.target.value)
  const handleDateChange = e => setTaskDate(e.target.value)

  const handleAddBtn = () => {
    if (!taskName || !taskDate) return
    setTaskList([{taskName, taskDate}, ...taskList])
    setTaskName("")
    setTaskDate("")
  }

  const handleDeleteTask = indexToDelete => {
    setTaskList(taskList.filter((_, idx) => idx !== indexToDelete))
  }

  return (
    <div className="task-app-bg">
      <div className="task-app-container">
        <h1 className="task-app-title">--Task Tracker--</h1>
        <div className="task-app-input-row">
          <input type="text" placeholder="Enter Task..." className="task-app-input" onChange={handleNameChange} value={taskName} />
          <input type="date" className="task-app-input" onChange={handleDateChange} value={taskDate} />
          <button className="task-app-add-btn" onClick={handleAddBtn}>
            Add
          </button>
        </div>
        {taskList.length === 0 ? (
          <h3 className="text-center m-5">Enjoy Your Day!</h3>
        ) : (
          <div>
            {taskList.map((task, index) => (
              <div key={index} className="task-app-task-row">
                <span className="task-app-task-name">{task.taskName}</span>
                <span className="task-app-task-date">{task.taskDate}</span>
                <button className="task-app-delete-btn" onClick={() => handleDeleteTask(index)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default TaskTrackerApp
