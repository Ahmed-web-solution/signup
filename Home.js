import React, { useEffect, useState } from "react";
import Cards from "../components/Products Cards/Cards";
import AddToCard from "../components/Header/AddToCard";
import Foter from "../components/Categories/foter/Foter";
import axios from "axios";
import { Link } from "react-router-dom";
import Categories from "../components/Categories/Categories";
import OpenModal from "../components/Header/Modal";

let categoryData = [
  {
    id: 1,
    imgSrc:
      "https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png",
    imgname: "Mobiles",
  },
  {
    id: 2,
    imgSrc:
      "https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png",
    imgname: "Vehicles",
  },
  {
    id: 3,
    imgSrc:
      "https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png",
    imgname: "Property",
  },
  {
    id: 4,
    imgSrc:
      "https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png",
    imgname: "Property",
  },
  {
    id: 5,
    imgSrc:
      "https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png",
    imgname: "Electronics",
  },
  {
    id: 6,
    imgSrc:
      "https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png",
    imgname: "Bikes",
  },

  {
    id: 7,
    imgSrc:
      "https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png",

    imgname: "services",
  },
  {
    id: 8,
    imgSrc:
    "  https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png",

    imgname: "Business",
  },

  {
    id: 9,
    imgSrc:
      "https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png",
    imgname: "jobs",
  },
  {
    id: 10,
    imgSrc:
      "https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png",
    imgname: "animals",
  },
  {
    id: 11,
    imgSrc:
      "https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png",
    imgname: "Furniture ",
  },
  {
    id: 12,
    imgSrc:
      "https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png",
    imgname: "Fashion ",
  },
  {
    id: 13,
    imgSrc:
      "https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png",
    imgname: "Books",
  },
  {
    id: 14,
    imgSrc:
      "https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png",
    imgname: "kids",
  },
];
function Home() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  console.log("data", data);

  const getProducts = async () => {
    try {
      let response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    } catch (error) {
      console.log("error in get products", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <OpenModal 
     width={400}
      className="Modal"
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)} 
        
         />
         <AddToCard setOpen={setOpen} />
      <div className="d-flex justify-content-center">
        <img style={{marginTop:140 }} src="https://images.olx.com.pk/thumbnails/295176473-800x600.webp"  height={230} alt="" />
      </div>
      <div className="d-flex justify-content-center">
        <img style={{marginTop:30 , width:650}} src="https://s0.2mdn.net/sadbundle/9072573848030475948/bottle_copy.jpg" height={110}  alt="" />
      </div>
      <h4 className=" mb-1 container" style={{marginTop:70}}> ALL Categories </h4>
      <div className="container d-flex justify-content-flex-start flex-wrap ">
        
        {categoryData.map((item) => {
          return <Categories imgsrc={item.imgSrc} imgname={item.imgname}/>;
        })}

      </div>
 
      {/* <Link to={'/card'}>Show card page</Link> */}
      <h4 className=" container" style={{marginTop:70}}>More on details...</h4>
      <div className="container d-flex justify-content-between flex-wrap mt-5">
        {data?.map((item, index) => {
          return (
            <div>
              <Cards key={index} data={item} />
            </div>
          );
        })}
      </div>
      <Foter />
    </div>
  );
}

export default Home;
