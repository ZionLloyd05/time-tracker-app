import React, { Component } from "react";
import EditableTimer from "./editableTimer.jsx";

class EditableTimerList extends Component {
  render() {
    return (
      <div className="col-12 mb-4">
        <EditableTimer
          title="Learn React"
          project="Web Domination"
          elapsed="8850985"
          runningSince={null}
          editFormOpen={false}
        />
        <EditableTimer
          title="Learn extreme ironing"
          project="World Domination"
          elapsed="3890985"
          runningSince={null}
          editFormOpen={false}
        />
      </div>
    );
  }
}

export default EditableTimerList;
