import React from "react";
import { styled } from "styled-components";
import { Image } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "antd/es/skeleton/Title";

const Categories = (props) => {
  
  return (

<CategoriesWrapper>
  
<div className="mt-4 container">
    

  <img className="categories-image me-3" src={props.imgsrc} alt="" />
  <div className="span">{props.imgname}</div>

</div>
</CategoriesWrapper>

  )
}

export default Categories;

const CategoriesWrapper = styled.div`


.categories-image{
  width: 100px;
  position: relative;
    text-align: center;
}

span{
  position: absolute;
   
}

`