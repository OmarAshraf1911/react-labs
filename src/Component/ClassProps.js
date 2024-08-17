import React, { Component } from "react";

class ClassProps extends Component {
  render() {
    const { course1, course2, children } = this.props;
    return (
      <div>
        <h2>Courses:</h2>
        <h3>Course 1: {course1}</h3>
        <h3>Course 2: {course2}</h3>
        {children}
      </div>
    );
  }
}

export default ClassProps;
