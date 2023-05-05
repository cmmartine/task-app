import React, { Component } from 'react';
import ShowTasks from './components/Overview';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { tasks: ['Task one', 'Task Two'] };
  }

  render() {
    return (
      <>
        <input type="text" className="task-input" />
        <input type="submit" className="task-submit" value="Create Task" />
        <ShowTasks tasks={this.state.tasks} />
      </>
    );
  }
}

export default App;
