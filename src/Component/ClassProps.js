import React, { Component } from "react";

class ClassProps extends Component {
  render() {
    const { course1, course2, children } = this.props;
    return (
      <div>
        <h3>Courses</h3>
        <p>Course 1: {course1}</p>
        <p>Course 2: {course2}</p>
        {children}
      </div>
    );
  }
}

export default ClassProps;
