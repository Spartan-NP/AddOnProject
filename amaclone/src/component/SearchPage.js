import React, { useEffect, useState } from "react";
import "../css/SearchPage.css";
import Header from "./Header";
import { Base_Url } from "./base_url";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { checkLogin } from "./base_url";

const SearchPage = () => {
  let navigate = useNavigate();
  let [productListId, setProductListId] = useState([]);
  let [isLogin, setIsLogin] = useState(checkLogin());
  let { id } = useParams();

  let getProductListId = async () => {
    let url = `${Base_Url}get-product-list-by-id/${id}`;
    let { data } = await axios.get(url);
    console.log("<<<", data);
    if (data.status === true) {
      setProductListId([...data.result]);
    } else {
      setProductListId([]);
    }
  };

  useEffect(() => {
    getProductListId();
  }, []);

  const [cart, setCart] = useState(productListId);
  const addToBasket = (cart) => {
    // let {image, min_price} =  productListId;
    console.log(">>>>>>>>>>", cart);
  };
  return (
    <>
      <Header />
      <div className="body__">
        {productListId.map((productList, index) => {
          return (
            <>
              <div key={index} className="searchPage__body">
                <div className="searchPage__imgblock">
                  <img
                    src={"/images/" + productList.image}
                    alt=""
                    className="searchPage__img"
                  />
                </div>
                <div className="description_box">
                  <p className="h6">{productList.description}</p>
                  <p className="h6">
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={2.5}
                        precision={0.5}
                        readOnly
                      >
                        {productList.aggregate_rating}
                      </Rating>
                    </Stack>
                  </p>
                  <p className="h6">INR: {productList.min_price}</p>
                </div>
                <div className="button_section">
                  <button
                    className="btn btn-danger "
                    onClick={() => navigate("/cart")}
                  >
                    Add to cart
                  </button>
                  {isLogin ? (
                    <button
                      className="btn btn-danger ms-3"
                      onClick={() => navigate("/product/" + productList._id)}
                    >
                      Buy
                    </button>
                  ) : (
                    <button
                      className="btn btn-danger ms-3"
                      onClick={() => navigate("/product/" + productList._id)}
                      disabled
                    >
                      Login for buy
                    </button>
                  )}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SearchPage;
