

function ShowTasks({tasks, onDeleteClick}){
    return (
      <ul>
        {tasks.map(task =>
          <li key={task.id}>
            {tasks.indexOf(task) + 1}. {task.text} <button onClick={() => onDeleteClick(task.id)}>Delete</button>
          </li>
        )}
      </ul>
    );
}

export default ShowTasks;