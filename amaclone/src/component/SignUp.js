import React from "react";
import "../css/SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className="signup__logopart">
        <img src="/images/assets/Alogo.jpg" alt="" />
      </div>
      <div className="signup__body__box">
        <div className="signup__body__ bg-white">
          <p className="signup__title">SignUp</p>
          <div className="signup__input__label">
            <lable htmlFor="">Name</lable>
            <input
              type="text"
              name="username"
              id=""
              placeholder="user name"
              required
            />
          </div>
          <div className="signup__input__label">
            <lable>Email</lable>
            <input
              type="email"
              name="email"
              id=""
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="signup__input__label">
            <lable>Password</lable>
            <input
              type="password"
              name="Password"
              id=""
              placeholder="*******"
              required
            />
          </div>
          <div className="signup__button__box">
            <button className="signup__Btnpart">SignUp</button>
          </div>
          <p>
            By creating an account, you agree to Amazon's
            <span> Conditions of Use</span> and <span>Privacy Notice</span>.
          </p>
          <hr />
          <p>
            Already have an account?
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
