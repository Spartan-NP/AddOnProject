import React from "react";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";


const Login = () => {
  let navigate = useNavigate();

  

  let success = (credentialResponse) => {
    try {
      let token = credentialResponse.credential;
      localStorage.setItem("aouth_token", token);
      window.location.assign("/");
    } catch (error) {
      alert("wrong token");
    }
  };
  let error = () => {
    alert ("Login Failed");
  };



  return (
    <>
      <GoogleOAuthProvider clientId="102946168721-u6nupm689fid9btssmoii87t84vug6gm.apps.googleusercontent.com">
        <div className="login__logopart">
          <img src="/images/assets/Alogo.jpg" alt="" />
        </div>
        <div className="login__body__box">
          <div className="login__body__ bg-white">
            <p className="login__title">Login</p>

            <div className="login__input__label">
              <lable>Email</lable>
              <input
                type="email"
                name=""
                id=""
                placeholder="example@gmail.com"
              />
            </div>
            <div className="login__input__label">
              <lable>Password</lable>
              <input type="password" name="" id="" placeholder="*******" />
            </div>
            <div className="login__button__box">
              <button className="login__Btnpart">Login</button>
              <span className="login__googleBtnPrt">
                <GoogleLogin
                  onSuccess={success}
                  onError={error}
                  className=".login__googleBtnPrtt"
                />
              </span>
            </div>
            <p>
              By creating an account, you agree to Amazon's
              <span> Conditions of Use</span> and <span>Privacy Notice</span>.
            </p>
            <hr />
            <p>
              Not have an account?
              <span onClick={() => navigate("/signup")}>SignUp</span>
            </p>
          </div>
        </div>
      </GoogleOAuthProvider>
    </>
  );
};

export default Login;
