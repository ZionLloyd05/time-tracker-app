import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import EditableTimerList from './components/editableTimerList.jsx';
import ToggleableTimerForm from './components/toggleableTimerForm.jsx';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="">Timer App</h3>
        <hr/>
        <div className="row text-center">
          <EditableTimerList/>
          <ToggleableTimerForm
            isOpen={false}
          />          
        </div>
      </div>
    );
  }
}

export default App;
