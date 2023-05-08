function ShowTasks({allTasks}){
    return (
      <div>
        <ul>{allTasks.map(task => <li key={task.id}>{task.text}</li>)}</ul>
      </div>
    );
}

export default ShowTasks;