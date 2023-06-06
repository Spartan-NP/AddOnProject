import React, { useEffect, useState } from "react";
import "../css/BuyOrder.css";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useNavigate, useParams } from "react-router-dom";
import { Base_Url } from "./base_url";
import { checkLogin } from "./base_url";

const BuyOrder = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  let [orderUser, setOrderUser] = useState({
    username: "",
    email: "",
    mobile: "",
    address: "",
  });
  let [isLogin, setIsLogin] = useState(checkLogin());

  useEffect(() => {
    if (isLogin) {
      setOrderUser({
        username: isLogin.name,
        email: isLogin.email,
        mobile: "",
        address: "",
      });
    }
  }, [isLogin]);

  let inputChange = (event) => {
    console.log(event);
    let { value, name } = event.target;
    orderUser[name] = value;
    setOrderUser({ ...orderUser });
  };

  let initproduct = {
    _id: 0,
    description: "",
    aggregate_rating: 0,
    rating_text: "",
    min_price: 0,
    image: "",
    product_id: 0,
    qty: 0,
  };

  let [product, setProduct] = useState({ ...initproduct });
  let [price, setPrice] = useState(0);

  let getProductById = async () => {
    let url = `${Base_Url}get-product-by-id/${id}`;
    let { data } = await axios.get(url);
    // console.log(">>>>>>", data);
    if (data.status === true) {
      setProduct({ ...data.result });
    } else {
      setProduct({ ...initproduct });
    }
  };

  useEffect(() => {
    getProductById();
  }, []);

  let manageIncQty = () => {
    let productMenu = { ...product };
    productMenu.qty += 1;
    setPrice(price + productMenu.min_price);
    setProduct(productMenu);
  };

  let manageDecQty = () => {
    let productMenu = { ...product };
    productMenu.qty -= 1;
    setPrice(price - productMenu.min_price);
    setProduct(productMenu);
  };

  let makePayment = async () => {
    try {
      let { data } = await axios.post(Base_Url + "create-order", {
        amount: price,
      });
      let { order } = data;

      var options = {
        key: "rzp_test_RB0WElnRLezVJ5", // Enter the Key ID generated from the Dashboard
        amount: order.amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: order.currency,
        name: "Amazon Clone",
        description: "Online Shopping",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6I8kF4RwBv1nxb_coY_k5SFmiWLgOKtwfqw&usqp=CAU",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async (response) => {
          let { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            response;

          let userOrder = { ...product };

          let sendData = {
            payment_id: razorpay_payment_id,
            order_id: razorpay_order_id,
            signature: razorpay_signature,
            order_list: userOrder.order_list,
            total: price,
            username: orderUser.username,
            email: orderUser.email,
            mobile: orderUser.mobile,
            address: orderUser.address,
          };
          let { data } = await axios.post(
            Base_Url + "verify-payment",
            sendData
          );

          if (data.status === true) {
            alert("Payment Done Successfull");
            window.location.assign("/");
          } else {
            alert("Payment Failed, try again");
          }
        },
        prefill: {
          name: orderUser.username,
          email: orderUser.email,
          contact: orderUser.mobile,
          address: orderUser.address,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      try {
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
      } catch (error) {
        alert("unable to load. Please try again");
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <>
      {/* modal */}

      <div
        className="modal fade"
        id="orderDetailModal"
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
                User Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="buyorder__input__label">
                <lable>Name</lable>
                <input
                  type="text"
                  placeholder="ex:-john"
                  value={orderUser.username}
                  onChange={() => {}}
                />
              </div>
              <div className="buyorder__input__label">
                <lable>Email</lable>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={orderUser.email}
                  onChange={() => {}}
                  required
                />
              </div>
              <div className="buyorder__input__label">
                <lable>Mobile</lable>
                <input
                  type="number"
                  placeholder="1234567890"
                  name="mobile"
                  value={orderUser.mobile}
                  onChange={inputChange}
                />
              </div>
              <div className="buyorder__input__label">
                <lable>Address</lable>
                <textarea
                  cols="30"
                  rows="10"
                  name="address"
                  value={orderUser.address}
                  onChange={inputChange}
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <p>Total: {price}</p>

              <button type="button" onClick={makePayment}>
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* product box */}

      <div className="buyorder__logopart">
        <img src="/images/assets/Alogo.jpg" alt="" onClick={()=>{navigate("/")}}/>
      </div>
      <div className="buyorder__body__box">
        <div className="buyorder__body__ bg-white">
          <p className="buyorder__title">Product</p>

          <div className="buyorder_productBox">
            <div className="buyorder_productBody">
              <img src={"/images/" + product.image} alt="" />
            </div>
            <div className="buyorder_textpart">
              <p>{product.description}</p>
              <p>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    readOnly
                  >
                    {product.aggregate_rating}
                  </Rating>
                </Stack>
              </p>
              <p>Price : {price}</p>
              <div className="buyorder-item-count  ">
                {price === 0 ? (
                  <button className="hand" onClick={manageDecQty} disabled>
                    -
                  </button>
                ) : (
                  <span className="hand" onClick={manageDecQty}>
                    -
                  </span>
                )}

                <span className="buyorder-qty">{product.qty}</span>
                <span className="hand" onClick={manageIncQty}>
                  +
                </span>
              </div>
              {price === 0 ? (
                <button
                  type="button"
                  className="buyorder_button"
                  data-bs-toggle="modal"
                  data-bs-target="#orderDetailModal"
                  disabled
                >
                  Confirm
                </button>
              ) : (
                <button
                  type="button"
                  className="buyorder_button"
                  data-bs-toggle="modal"
                  data-bs-target="#orderDetailModal"
                >
                  Confirm
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyOrder;
