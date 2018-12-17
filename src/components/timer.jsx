import React, { Component } from "react";

class Timer extends Component {
  render() {
    const elapsedString = convertMS(this.props.elapsed);
    return (
      <div className="row text-center mb-4 timer">
        <div className="col-12">
          <h6>{this.props.title}</h6>
        </div>
        <div className="col-12">
          <h3>{this.props.project}</h3>
        </div>
        <div className="col-12">
          <h1>{elapsedString}</h1>
        </div>
        <div className="col-12">
          {/* <div className="col-6"> */}
          <button className="btn btn-sm btn-success mx-3">Edit</button>
          {/* </div> */}
          {/* <div className="col-6"> */}
          <button className="btn btn-sm btn-danger mx-3">Trash</button>
          {/* </div> */}
        </div>
        <div className="col-12 my-3">
          <button className="btn btn-outline-info startBtn">Start</button>
        </div>
      </div>
    );
  }
}

function convertMS(ms) {
  var d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  h += d * 24;
  return h + ":" + m + ":" + s;
}

export default Timer;
