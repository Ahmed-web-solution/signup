import Styled from "styled-components";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useState } from 'react';
import { Rate } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const Cards = (props) => {
  const {
    image,
    price,
    title,
    productName,
    description,
    rating: { rate },
  } = props?.data;

  return (
    <CardWrapper>
      <div className="multiple-card">
        <div className="card">
          <div className="image-1">
            {" "}
            <img src={image} alt="Myimage" />
          </div>
          <div className="container">
            <p className="desc">{title}</p>
            <div className="flex-price">
              <h5>${price}</h5>
              <HeartOutlined className="fa" />
            </div>
            <hr />
            <h3>{productName}</h3>
            <p className="desc">{description}</p>

            {/* <Rate tooltips={desc} /> */}
            <span className="ant-rate-text">
              <Rate className="font-size" allowHalf disabled value={rate} />
            </span>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Cards;

const CardWrapper = Styled.div`
.card {
  margin-bottom: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 300px;
  height: 400px;
  padding: 10px
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 5px 12px;
}
img{
  width: 70%;
  height: 170px;
}

.image-1{
  width:100%;
  height:400px;
  overflow:hidden;
  display:flex;
  justify-content:center;
  align-items:center;

    
}

 h3, p,{
  margin :5px;
}
p{
  text-overflow:ellipsis;
  overflow:hidden;
  // Addition lines for 2 line or multiline ellipsis
  display: -webkit-box !important;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  white-space: normal; */
  
}

.ant-rate-text{
  font-size:10px
}

.desc{
  font-size:14px;
}

.fa{
  font-size:18px;
}

.flex-price{
  display:flex;
  justify-content:space-between;
  align-items:center;
}

/* body{background:#eee} */
.ratings i{font-size: 16px;
  color: red}
.strike-text{color: red;
  text-decoration: line-through}
.product-image{width: 100%}
.dot{height: 7px;
  width: 7px;
  margin-left: 6px;margin-right: 6px;
  margin-top: 3px;background-color: blue;
  border-radius: 50%;display: inline-block}
.spec-1{color: #938787;font-size: 15px}h5{font-weight: 400}
.para{font-size: 16px}

.font-size{
  font-size: 15px;
}

`;
