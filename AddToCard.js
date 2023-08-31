import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import OpenModal from "./Modal"
import { Image } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingCartOutlined, CarOutlined ,SearchOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";

const AddToCard = (props) => {

  return (
    <AddToCardWrapper className="bg-light pt-3 mb-5 p-3">
      <div className="header container  ">
        <div className="olx-fir-logo">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXW3jGfESrfzNNDUwPO-jsufsiPD3puz_9LAr2yEXgi_EiJ9Y5Gi385tpAP5iVb1eCnpo&usqp=CAU"
              width={50}
              alt="pic"
            />
          </div>
      
          {/* <div className="d-flex align-items-center">
            <div className="rounded-icon ms-5 d-flex justify-content-center align-items-center">
              <CarOutlined className="aicon" />
              <p>Property</p>
            </div>
            <div className="rounded-icon ms-5 d-flex justify-content-center align-items-center">
              <ShoppingCartOutlined className="rounded-icon" />
              <p>Motors</p>
            </div>
          </div> */}

<div>
        <span class="rounded-icon me-5">
       <span> <CarOutlined className="rounded-icon" /></span>MOTORS</span>
          
        
        <span class="rounded-icon">
        <ShoppingCartOutlined className="rounded-icon" />
          PROPERTY
        </span>
      </div>
        </div>

        <div className="olx-sec-logo">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png"
              alt="pic"
              width={80}
            />
          </div>
          <div class="col-lg-3 location_select">
          <div class="input-group input-group-lg ">
          <button style={{backgroundColor:"black"}}><SearchOutlined /></button>
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Search city, area or locality</option>
              <option value="1">One</option>
            </select>
          </div>
        </div>
          <div className="d-flex ">
          <input type="text" width={180} class="form-control" placeholder="Find Cars, Mobile Phone, and more..."
              aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <button style={{backgroundColor:"black"}}><SearchOutlined /></button>
          </div>
          <div class="col-lg-3 selling_page">
            <button>
              <p class="fa-solid fa-plus">Register</p>
            </button>
          </div>
          <div class="col-lg-3 selling_page">
            <button onClick={() => props.setOpen(true)}>
              <p class="fa-solid fa-plus">Sell</p>
            </button>
          </div>
        </div>
      </div>
    </AddToCardWrapper>
  );
};

export default AddToCard;

const AddToCardWrapper = styled.div`
  .olx-fir-logo {
    display: flex;
    align-items: center;
  }

  p {
    margin: 0;
    font-size: 14px;
  }

  .anticon svg {
    /* background-image: linear-gradient(rgb(230, 230, 230), #fff); */
  font-size: 10px;
    border-radius: 25px;
    color: black;
    margin-right: 5px;
  }


  .anticon svg {
    font-size: 20px;
    /* margin-left: 60px; */
  }


  .olx-sec-logo {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  input {
    padding: 8px;
    width: 260px;
    border-radius: 0px;
  }

  .search-bar {
    width: 650px;
    padding: 10px;
  }

  a {
    color: black;
    font-size: 18px;
  }

  i.fa {
    display: inline-block;
    border-radius: 60px;
    box-shadow: 0 0 2px #888;
    padding: 0.5em 0.6em;
  }

  .selling_page button {
    border-style: solid;
    border-width: 5px;
    border-top-color: #23e5db;
    border-left-color: #ffce32;
    border-right-color: #3a77ff;
    border-bottom-color: #3a77ff;
    font-size: 15px;
    cursor: pointer;
    padding: 6px 12px;
    border-radius: 30px;
    background-color: white;
    color: black;
    /* margin-left: 30px; */
    width: 85px;
    height: 45px;
  }

.anticon svg{
  color: #fff;
}

.rounded-icon{
    /* background-image: linear-gradient(rgb(230, 230, 230), #fff); */
    /* padding: 10px;
     */
    border-radius: 50px;
    color: black; 
}

.rounded-icon {
    font-size: 12px;

}

.rounded-icon:hover {
    cursor: pointer;
}
  
`;
