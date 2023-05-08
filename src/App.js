import React, { Component } from 'react';
import ShowTasks from './components/Overview';
import uniqid from 'uniqid';

class App extends Component{
  constructor() {
    super();
    this.state = { 
      task: { 
        text: '',
        id: uniqid() 
      }, 
      tasks: [] 
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitTask = this.submitTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  submitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid(),
      },
    });
  };

  deleteTask(currentTaskID) {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== currentTaskID)
    })
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <>
        <form>
          <label htmlFor="task-input">Add a task:</label>
          <input type="text" className="task-input" id="task-input" onChange={this.handleChange} value={task.text}/>
          <input type="submit" className="task-submit" value="Create Task" onClick={this.submitTask} />
        </form>
        <ShowTasks tasks={tasks} onDeleteClick={this.deleteTask}/>
      </>
    );
  }
}

export default App;
