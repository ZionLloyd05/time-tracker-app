import React, { Component } from "react";
import TimerForm from "./timerForm";

class ToggleableTimerForm extends Component {
  render() {
    if (this.props.isOpen) {
      return (
        <div className="col-12 text-center">
          <TimerForm />
        </div>
      );
    } else {
      return <button className="timerBtn btn btn-primary">Add Timer</button>;
    }
  }
}

export default ToggleableTimerForm;
