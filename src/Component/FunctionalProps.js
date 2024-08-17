import React from "react";

const FunctionalProps = (props) => {
  return (
    <div>
      <h2>
        My name {props.fname} {props.lname},<a href="{props.github}">GitHub</a>,
        <a href="{props.LinkedIn}">LinkedIn</a>
      </h2>
    </div>
  );
};

export default FunctionalProps;
