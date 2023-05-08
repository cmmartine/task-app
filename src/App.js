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
        id: uniqid()
      },
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <>
        <input type="text" className="task-input" id="task-input" onChange={this.handleChange} value={task.text}/>
        <input type="submit" className="task-submit" value="Create Task" onClick={this.submitTask} />
        <ShowTasks allTasks={tasks} />
      </>
    );
  }
}

export default App;
