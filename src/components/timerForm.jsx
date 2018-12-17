import React, { Component } from "react";

class TimerForm extends Component {
  render() {
    const submitText = this.props.title ? "Update" : "Create";
    return (
      <div className=" mb-4 text-center timerform">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            defaultValue={this.props.title}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            defaultValue={this.props.project}
          />
        </div>
        <div className="row">
          <div className="col-6">
            <button type="button" className="btn btn-outline-primary">
              {submitText}
            </button>
          </div>
          <div className="col-6">
            <button type="button" className="btn btn-outline-danger">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerForm;
