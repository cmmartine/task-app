import React, { Component } from 'react';
import ShowTasks from './components/Overview';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { tasks: ['Task one', 'Task Two'] };
    this.addTask=this.addTask.bind(this);
  }

  addTask() {
    let inputText = document.getElementById('task-input');
    this.setState({tasks: [...this.state.tasks, inputText.value] });
    inputText.value = '';
  }

  render() {
    return (
      <>
        <input type="text" className="task-input" id="task-input"/>
        <input type="submit" className="task-submit" value="Create Task" onClick={this.addTask} />
        <ShowTasks tasks= {this.state.tasks.map(task => <li key={this.state.tasks.indexOf(task)}>{task}</li>)} />
      </>
    );
  }
}

export default App;
