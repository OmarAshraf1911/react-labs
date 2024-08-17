import React, { Component } from "react";
const font = {
  fontSize: "19px",
};
class UserSubscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      subscription: "Guest",
    };
  }

  handleSubscription = () => {
    this.setState({
      isLoggedIn: true,
      subscription: "You now have a subscription",
    });
  };

  render() {
    const { isLoggedIn, subscription } = this.state;

    return (
      <div>
        <h1>User Status</h1>
        <h2>Logged In: {isLoggedIn ? "true" : "false"}</h2>
        <h2>Subscription Status: {subscription}</h2>
        <button style={font} onClick={this.handleSubscription}>
          Subscribe
        </button>
      </div>
    );
  }
}

export default UserSubscription;
