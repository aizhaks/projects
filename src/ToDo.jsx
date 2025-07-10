import { useEffect, useState } from "react";
function ToDo() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [action, setAction] = useState(null)
  const handleAddTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, { taskName: task, completed: false }]);
    setTask('');
    setAction('add')
  };

  const handleClearTasks = () => {
    setTasks([]);
    setAction('clear')
  };

  const handleRemove = (id) => {
    setTasks(tasks.filter((_, index) => index !== id));
    setAction('remove')
  };

  const handleChange = (id) => {
    const newTasks = [...tasks];
    newTasks[id].completed = !newTasks[id].completed;
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'complete') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });
   useEffect(()=> {
    if(action =='add'){
      localStorage.setItem('tasks', JSON.stringify(tasks))
         alert('Тапсырма қосылды')
    }else  if(action =='clear'){
      localStorage.clear()
  alert('Тапсырма тазаланды')
    }else if(action  =='remove'){
      localStorage.removeItem('tasks')
      alert('Тапсырма өшірілді')
    }else{
 JSON.parse(localStorage.getItem('tasks'))
      alert('Тапсырмалар алынды')
    }

    setAction(null)
   }, [action])
  return (
    <div className="todo-container">
      <div className="input-row">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="input-box"
          placeholder="Жаңа тапсырма"
        />
        <button onClick={handleAddTask} className="add-button">Қосу</button>
        <button onClick={handleClearTasks} className="clear-button">Тазалау</button>
      </div>

      <div className="filter-box">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('complete')}>Complete</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>

      <ul className="task-list">
        {filteredTasks.map((tapsyrma, index) => (
          <li key={index} className="task-item">
            <div>{tapsyrma.taskName}</div>
            <div className="btn-box">
              <button onClick={() => handleChange(index)}>
                {tapsyrma.completed ? '✔️' : '❌'}
              </button>
              <button onClick={() => handleRemove(index)}>🗑</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;