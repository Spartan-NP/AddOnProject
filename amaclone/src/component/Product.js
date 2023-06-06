import React, { useState } from "react";
import "../css/Product.css";
import { useNavigate, useParams } from "react-router-dom";
import { Base_Url } from "./base_url";
import axios from "axios";
import { useEffect } from "react";

const Product = () => {
  const navigate = useNavigate();
  let [productList, setProductList] = useState([]);

  let getProductList = async () => {
    let url = `${Base_Url}get-product-list`;
    let { data } = await axios.get(url);
    if (data.status === true) {
      setProductList([...data.result]);
    } else {
      setProductList([]);
    }
  };
  useEffect(() => {
    getProductList();
  }, []);
  return (
    <>
      <div className="product__body">
        {productList.map((product, index) => {
          return (
            <>
              <div key={index} className="product__block">
                <p
                  className="product__heading"
                  onClick={() => {
                    navigate("/productList/" + product.product_id);
                  }}
                >
                  {product.name}
                </p>
                <img
                  className="product__img"
                  src={"/images/" + product.image}
                  alt=""
                  srcset=""
                  onClick={() => {
                    navigate("/productList/" + product.product_id);
                  }}
                />
                <p
                  className="product__shopNow"
                  onClick={() => {
                    navigate("/productList/" + product.product_id);
                  }}
                >
                  Shop now
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Product;
