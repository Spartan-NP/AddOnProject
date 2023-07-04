import React from "react";
import "../css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Location from "@mui/icons-material/LocationOn";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "./base_url";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  let [isLogin, setIsLogin] = useState(checkLogin());
  console.log(isLogin);
  let logout = () => {
    localStorage.removeItem("aouth_token");
    window.location.assign("/");
  };

  return (
    <>
      <div
        className="modal fade"
        id="confirmUser"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="header__">
        <img
          className="header__logo"
          src="/images/assets/alogo.png"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="header__location">
          <Location className="header__locationIcon" />
          <div className="header__option bf-info">
            {isLogin ? (
              <>
                <span className="header__optionLineOne">
                  Deliver to {isLogin.given_name}
                </span>
                <span className="header__optionLineTwo">Haldwani 246486</span>
              </>
            ) : (
              <>
                <span className="header__optionLineOne">Deliver to ---</span>
                <span className="header__optionLineTwo">Location ---</span>
              </>
            )}
          </div>
        </div>

        <div className="header__search">
          <select name="" id="" className="header__select">
            <option value="">All</option>
          </select>

          <input className="header__searchInput" type="text" />
          <span className="header__searchIcon">
            <SearchIcon />
          </span>
        </div>

        <div className="header__nav">
          <div className="header__option">
            <span className="language__dropdown">
              <select>
                <option value="">EN</option>
              </select>
            </span>
          </div>

          <div className="header__option">
            {isLogin ? (
              <>
                <span className="header__optionLineOne">
                  Hello {isLogin.given_name}
                </span>
                <span className="header__optionLineTwo" onClick={logout}>
                  Logout
                </span>
              </>
            ) : (
              <>
                <span className="header__optionLineOne">Hello User</span>
                <span
                  className="header__optionLineTwo"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </>
            )}
          </div>

          <div
            className="header__option"
            onClick={() => navigate("/orderlist")}
          >
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

          <div className="header__optionBasket">
            <button
              className="btn bg-transparent text-white"
              onClick={() => {
                navigate("/cart");
              }}
            >
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Nav below bar */}

      <div className="navBelowBar">
        <div className="navBelowBar__leftSide">
          <span className="header__optionLineTwo">All</span>
          <span className="header__optionLineTwo">Today's Deals</span>
          <span className="header__optionLineTwo">Buy Again</span>
          <span className="header__optionLineTwo">Customer Service</span>
          <span className="header__optionLineTwo">Gift Cards</span>
          <span className="header__optionLineTwo">Registry</span>
          <span className="header__optionLineTwo">Sell</span>
        </div>
        <div className="navBelowBar__rightSide">
          <span className="header__optionLineTwo">
            Shop deals in Electronics
          </span>
        </div>
      </div>
    </>
  );
};
export default Header;
