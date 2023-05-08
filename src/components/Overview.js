function ShowTasks({allTasks}){
    return (
      <div>
        <ul>
          {allTasks.map(task => {
            return <li key={task.id}>
              {allTasks.indexOf(task) + 1}. {task.text}
            </li>
          })}
        </ul>
      </div>
    );
}

export default ShowTasks;