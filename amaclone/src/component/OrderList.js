import React from "react";
import "../css/BuyOrder.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Base_Url } from "./base_url";
import { useNavigate } from "react-router-dom";

const OrderList = () => {
  const navigate = useNavigate();

  let [orderList, setOrderList] = useState([]);

  let getOrderList = async () => {
    let url = `${Base_Url}save-data`;
    let { data } = await axios.get(url);
    if (data.status === true) {
      setOrderList([...data.result]);
    } else {
      setOrderList([]);
    }
  };

  useEffect(() => {
    getOrderList();
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
          <p className="buyorder__title">Order List</p>
          <Scrollbars>
            {orderList.map((order, index) => {
              return (
                <>
                  <div key={index} className="buyorder__allitembox ">
                    <div className="buyorder_textpart">
                      <p>_id : {order._id}</p>
                      <p>Username : {order.username}</p>
                      <p>Email : {order.email}</p>
                      <p>Mobile : {order.mobile}</p>
                      <p>Address : {order.address}</p>
                      <p>Total Price : {order.total_price} /-</p>
                      <p>Order id : {order.order_id}</p>
                      <p>Payment_id : {order.payment_id}</p>
                    </div>
                    <hr className="mt-1" />
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

export default OrderList;
