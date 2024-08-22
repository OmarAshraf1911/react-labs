import React, { Component } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn: true,
    };
  }

  toggleComponent = () => {
    this.setState((prevState) => ({
      isSignIn: !prevState.isSignIn,
    }));
  };

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.toggleComponent}
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          {this.state.isSignIn ? "Sign Up" : "Sign In"}
        </button>
        {this.state.isSignIn ? <SignIn /> : <SignUp />}
      </div>
    );
  }
}

export default App;
