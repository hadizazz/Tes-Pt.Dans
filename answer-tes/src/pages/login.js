import React from "react";

const login = () => {
  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google">
            <img
              src="https://cdn.pixabay.com/photo/2016/04/13/14/27/google-chrome-1326908_960_720.png"
              alt="logo google"
              className="icon"
            />
            Google
          </div>
          <div className="loginButton facebook">
            <img
              src="https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_960_720.png"
              alt="logo facebook"
              className="icon"
            />
            Facbook
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <span className="or">OR</span>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default login;
