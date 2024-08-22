import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  decrementCounter() {
    this.setState((prevState) => ({
      counter: prevState.counter > 1 ? prevState.counter - 1 : 1,
    }));
  }

  render() {
    return (
      <div className="counter">
        <span className="btn" onClick={this.incrementCounter}>
          <i className="bi bi-plus-circle"></i>
        </span>
        <span>{this.state.counter}</span>
        <span className="btn" onClick={this.decrementCounter}>
          <i className="bi bi-dash-circle"></i>
        </span>
      </div>
    );
  }
}

export default Counter;
