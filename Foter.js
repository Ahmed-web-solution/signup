import React from "react";
import { styled } from "styled-components";
import {TwitterOutlined , FacebookOutlined ,PlayCircleOutlined,InstagramOutlined} from "@ant-design/icons"

const Foter = () => {
  return (
    <FoterWrapper>
      <div className="flex">
        <div>
          {" "}
          <img
            src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp"
            width={540}
            alt=""
          />
        </div>
        <div>
          <h2>TRY THE OLX APP</h2>
          <h5>
            Buy, sell and find just about anything using <br /> the app on your
            mobile.
          </h5>
       
        </div>
        <div className="hr"></div>
        <div>
       
          <span className="mb-3">GET YOUR APP TODAY</span>
          <div>
            <img className="me-2"
              src="https://www.pngkit.com/png/full/222-2228956_app-store-logo-app-store-icon-white.png"
              width={123}
              alt=""
            />
            <img className="me-2"
              src="https://e7.pngegg.com/pngimages/918/845/png-clipart-google-play-logo-google-play-app-store-android-google-play-text-logo.png"
              width={135}
              alt=""
            />
            <img 
              src="https://www.pngkit.com/png/full/222-2228956_app-store-logo-app-store-icon-white.png"
              width={135}
              alt=""
            />
          </div>
        </div>
      </div>

  <div className="pt-3 popular">
      <div className="container">
        <div className="">
          <div className="row" >
            <div className="col-lg-2 col-sm-12 mb-lg-5">
              <span className="fw-bold ">Popular categories</span>
              <ul className="list-group list-group-flush text-decoration-none">
                <li>Car</li>
                <li>Flats for rent</li>
                <li>Mobile Phones</li>
                <li>Jobs</li>
              </ul>
            </div>


            <div className="col-lg-2 col-sm-12">
              <span className="fw-bold">POPULAR CATEGORIES</span>
              <ul className="list-group list-group-flush">
                <li>Car</li>
                <li>Flats for rent</li>
                <li>Mobile Phones</li>
                <li>Jobs</li>
              </ul>
            </div>


            <div className="col-lg-2 col-sm-12">
              <span className="fw-bold">TRENDING SEARCHES</span>
              <ul className="list-group list-group-flush">
                <li>Car</li>
                <li>Flats for rent</li>
                <li>Mobile Phones</li>
                <li>Jobs</li>
              </ul>
            </div>


            <div className="col-lg-2 col-sm-12">
              <span className="fw-bold">ABOUT US
              </span>
              <ul className="list-group list-group-flush">
                <li>Car</li>
                <li>Flats for rent</li>
                <li>Mobile Phones</li>
                <li>Jobs</li>
              </ul>
            </div>


            <div className="col-lg-4 col-sm-12 follow" >
              <span className="fw-bold">FOLLOW US</span>
              <div className="icons">
              <h4 className="me-2"><TwitterOutlined /></h4>
              <h4 className="me-2"><FacebookOutlined /> </h4>
              <h4 className="me-2"><PlayCircleOutlined /> </h4>
              <h4><InstagramOutlined /> </h4>
              </div>
              <i className=""></i>
              <div><img className=" mt-3 me-2" src="https://www.pngkit.com/png/full/222-2228956_app-store-logo-app-store-icon-white.png" alt="" width={100} height={30} />
                <img className=" mt-3 me-2" src="https://e7.pngegg.com/pngimages/918/845/png-clipart-google-play-logo-google-play-app-store-android-google-play-text-logo.png" alt="" width={100} height={30} />
                <img className=" mt-3" src="https://www.pngkit.com/png/full/222-2228956_app-store-logo-app-store-icon-white.png" alt="" width={100} height={30} />
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>

    <div class="d-flex justify-content-end copy-right" >
    <div class=" pe-5 pt-4 copy">
      <p>Free Classifieds in Pakistan . © 2006-2022 OLX</p>
    </div>
  </div>

    </FoterWrapper>
  );
};

export default Foter;

const FoterWrapper = styled.div`

.flex{
display:flex;
justify-content: space-evenly;
align-items: center;
}
.hr{
    border-left: 2px solid black;
  height: 100px;
}

.popular{
    background-color: #ebeeef; border-top: 1px solid rgba(0,47,52,.2);
}

.container{
    background-color: #ebeeef;
}
.follow{
    font-family: 'Poppins'; height: 50px;
}

.row{
    font-size: 12px;
}

li{
    list-style: none;
}

.fw-bold{
    font-size: 16px;
    font-family:Arial, Helvetica, sans-serif;
}

.icons{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.copy-right{
    font-size: 12px; background-color:  #002F34; color: white;
}

.copy{
    font-size: 13px;
}
`;
