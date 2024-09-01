import React from "react";
import { Link } from "react-router-dom";
import Ground from "./images/ground.png";
import "./sign.css";

const SignUp = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="info">
          <div className="title">
            <p className="welcome">Welcome To Design Community</p>
            <p className="account">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
          <div className="email">
            <label>Email</label>
            <input type="email" />
          </div>
          <div className="username">
            <label htmlFor="">Username</label>
            <input type="text" />
          </div>
          <div className="password">
            <label>Password</label>
            <input type="password" />
            <ul>
              <li>Use 8 or more characters</li>
              <li>One Uppercase character</li>
              <li>One Lowercase character</li>
              <li>One special character</li>
              <li>One number</li>
            </ul>
          </div>
          <div className="check">
            <input type="checkbox" />
            <label>
              I want to receive emails about the product, feature updates,
              events, and marketing promotions.
            </label>
          </div>
          <div className="Terms">
            <p>
              By creating an account, you agree to the <span>Terms of use</span>{" "}
              and <span>Privacy Policy.</span>
            </p>
          </div>
          <div className="submit">
            <button>Create an account</button>
            <p>
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="ground">
        <img src={Ground} alt="image" />
      </div>
    </div>
  );
};

export default SignUp;
