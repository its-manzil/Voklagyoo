import React, { useState } from "react";
import Nav from "./Nav";
import "./profile.css";

function Profile() {
  const [loginStyle, setLoginStyle] = useState({ left: "50px" });
  const [registerStyle, setRegisterStyle] = useState({ left: "450px" });
  const [btnStyle, setBtnStyle] = useState({ left: "0px" });

  const register = () => {
    setLoginStyle({ left: "-400px" });
    setRegisterStyle({ left: "50px" });
    setBtnStyle({ left: "110px" });
  };

  const login = () => {
    setLoginStyle({ left: "50px" });
    setRegisterStyle({ left: "450px" });
    setBtnStyle({ left: "0px" });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {
      userId: formData.get("userId"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    try {
      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.text();
      alert(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {
      userId: formData.get("userId"),
      password: formData.get("password"),
    };
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.text();
      alert(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Nav />
      <div className="hero" id="profile1">
        <div className="form-box">
          <div className="buttonBox">
            <div id="btn1" style={btnStyle}></div>
            <button type="button" className="toggle-btn" onClick={login}>
              Log In
            </button>
            <button type="button" className="toggle-btn" onClick={register}>
              Register
            </button>
          </div>
          <div className="social-icons">
            <img src="/facebook.png" alt="Facebook" />
            <img src="/twitter.png" alt="Twitter" />
            <img src="/google.png" alt="Google" />
          </div>
          <form
            id="login"
            className="input-group"
            style={loginStyle}
            onSubmit={handleLogin}
          >
            <input
              type="text"
              className="input-field"
              placeholder="User ID"
              name="userId"
              required
            />
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
              name="password"
              required
            />
            <input type="checkbox" className="check-box" />
            <span>Remember Password</span>
            <button type="submit" className="submit-btn">
              Log In
            </button>
          </form>
          <form
            id="register"
            className="input-group"
            style={registerStyle}
            onSubmit={handleSignup}
          >
            <input
              type="text"
              className="input-field"
              placeholder="User ID"
              name="userId"
              required
            />
            <input
              type="email"
              className="input-field"
              placeholder="Email ID"
              name="email"
              required
            />
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
              name="password"
              required
            />
            <input
              type="password"
              className="input-field"
              placeholder="Re-enter Password"
              required
            />
            <input type="checkbox" className="check-box" />
            <span>I agree to the terms and conditions</span>
            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
