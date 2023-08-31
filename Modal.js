import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import { styled } from "styled-components";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { PhoneOutlined } from "@ant-design/icons";

const OpenModal = (props) => {
 
  return (
    <ModalWrapper  {...props} footer={<></>}>
        <div className="">
          <div className="d-flex justify-content-center pt-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXW3jGfESrfzNNDUwPO-jsufsiPD3puz_9LAr2yEXgi_EiJ9Y5Gi385tpAP5iVb1eCnpo&usqp=CAU
        "
              width={70}
              alt=""
            />
          </div>
          <div>
            <h5 className="mt-4" style={{ textAlign: "center" }}>
              Welcome to OLX
            </h5>
            <p className="mt-3" style={{ textAlign: "center", fontSize: 20 }}>
              The trusted community of buyers and sellers.
            </p>
            <div className="mt-3">
              <GoogleLoginButton
                text="Continue with Google"
                onClick={() => alert("Hello")}
              />
            </div>
            <FacebookLoginButton
              style={{ with: 90 }}
              text="Continue with Facebook"
              onClick={() => alert("Hello")}
            />
            <div className="phone-icon mt-3">
              <button className="btn">
                <PhoneOutlined
                  text="Continue with Google"
                  onClick={() => alert("Hello")}
                />
                <p>Continue with phone</p>
              </button>
            </div>
            <div className="mt-3">
              <GoogleLoginButton
                text="Continue with Google"
                onClick={() => alert("Hello")}
              />
            </div>
          </div>
        </div>
    </ModalWrapper>
  );
};
export default OpenModal;

const ModalWrapper = styled(Modal)`

  .btn {
    border: 1px solid black;
  }
`;
