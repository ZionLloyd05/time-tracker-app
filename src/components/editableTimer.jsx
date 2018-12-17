import React, { Component } from "react";
import TimerForm from "./timerForm";
import Timer from "./timer";

class EditableTimer extends Component {
  render() {
    if (this.props.editFormOpen) {
      return (
        <TimerForm title={this.props.title} project={this.props.project} />
      );
    } else {
      return (
        <Timer
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
        />
      );
    }
  }
}

export default EditableTimer;
