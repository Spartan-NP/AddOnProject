import React from "react";
import "../css/BuyOrder.css";
import { useNavigate, useParams } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Base_Url } from "./base_url";

const AddToCart = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  let [product, setProduct] = useState([]);
  let getProductById = async () => {
    let url = `${Base_Url}get-product-by-id/${id}`;
    let { data } = await axios.get(url);
    console.log(">>>>>>", data);
    if (data.status === true) {
      setProduct([...data.result]);
    } else {
      setProduct([]);
    }
  };

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <>
      <div className="buyorder__logopart">
        <img
          src="/images/assets/Alogo.jpg"
          alt=""
          onClick={() => navigate("/")}
        />
      </div>

      <div className="buyorder__body__box ">
        <div className="buyorder__body__ bg-white">
          <p className="buyorder__title">Product</p>
          <Scrollbars>
            {product.map((item, index) => {
              return (
                <>
                  <div key={index} className="buyorder__allitembox">
                    <div className="buyorder_productBox">
                      <div className="buyorder_productBody">
                        <img src={"/images/" + item.image} alt="" />
                      </div>
                      <div className="buyorder_textpart">
                        <p>{item.description}</p>
                        <p>rating</p>
                        <p>{item.min_price}</p>
                        <div className="buyorder-item-count  ">
                          <span className="hand">-</span>
                          <span className="buyorder-qty">0</span>
                          <span className="hand">+</span>
                        </div>

                        <button
                          type="button"
                          className="buyorder_button"
                          data-bs-toggle="modal"
                          data-bs-target="#orderDetailModal"
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Scrollbars>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
