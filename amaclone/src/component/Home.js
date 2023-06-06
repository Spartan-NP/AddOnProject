import React from "react";
import "../css/Home.css";
import Header from "./Header";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <div className="home__body">
        <Header />
        <div className="home">
          <div className="home__container">
            <img
              className="home__image"
              src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61TD5JLGhIL._SX3000_.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="home__amazonIn">
          <p className="home__amazonInPara">
            You are on amazon.com. You can also shop on Amazon India fro
            millions of product with fast local delivery.
            <a
              href="https://www.amazon.in/?ref=aisgw_intl_stripe_in"
              target="_blank"
            >
              Click here to go to amazon.in
            </a>
          </p>
        </div>
        <Product />
      </div>
    </>
  );
};

export default Home;
