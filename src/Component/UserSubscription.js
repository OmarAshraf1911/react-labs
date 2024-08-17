import React, { Component } from "react";

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
        <h2>User Status</h2>
        <p>Logged In: {isLoggedIn ? "true" : "false"}</p>
        <p>Subscription Status: {subscription}</p>
        <button onClick={this.handleSubscription}>Subscribe</button>
      </div>
    );
  }
}

export default UserSubscription;
