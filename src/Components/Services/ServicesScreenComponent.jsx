import React from "react";
import { StyledServicesScreen } from "./StyledServicesScreen";
import myVideo from "../../Assets/MyVideo.mp4";
import { ItemStarIcon } from "./ItemIcon";

import bcs1 from "../../Assets/bcs-1.jpg";
import bcs2 from "../../Assets/bcs-2.jpg";
import bcs3 from "../../Assets/bcs-3.jpg";
import bcs4 from "../../Assets/bcs-4.jpg";
import bcs5 from "../../Assets/bcs-5.jpg";
import bcs6 from "../../Assets/bcs-6.jpg";
import bcs7 from "../../Assets/bcs-7.jpg";
import bcs8 from "../../Assets/bcs-8.jpg";
import bcs9 from "../../Assets/bcs-9.jpg";
import bcs10 from "../../Assets/bcs-10.jpg";
import bcs11 from "../../Assets/bcs-11.jpg";
import bcs12 from "../../Assets/bcs-12.jpg";
import bcs13 from "../../Assets/bcs-13.jpg";
import bcs14 from "../../Assets/bcs-14.jpg";
import bcs15 from "../../Assets/bcs-15.jpg";
import bcs16 from "../../Assets/bcs-16.jpg";
import bcs17 from "../../Assets/bcs-17.jpg";
import bcs18 from "../../Assets/bcs-18.jpg";
import bcs19 from "../../Assets/bcs-19.jpg";
import bcs20 from "../../Assets/bcs-20.jpg";
import bcs21 from "../../Assets/bcs-21.jpg";
import bcs22 from "../../Assets/bcs-22.jpg";
import bcs23 from "../../Assets/bcs-23.jpg";
import bcs24 from "../../Assets/bcs-24.jpg";
import bcs25 from "../../Assets/bcs-25.jpg";
import bcs26 from "../../Assets/bcs-26.jpg";
import bcs27 from "../../Assets/bcs-27.jpg";
// import bcs28 from "../../Assets/bcs-28.jpg";
import bcs29 from "../../Assets/bcs-29.jpg";

export const ServicesScreenComponent = (props) => {
  return (
    <StyledServicesScreen>
      <br className="" />
      <div className="ContainerServices">
        <div className="ContainerHeader">
          <div className="ContainerTextServices">
            <h1>About our services</h1>
            <h2 className="">We offer a complete services to your needs.</h2>

            <div className="ItemsServices" data-aos="fade-right">
              <ItemStarIcon />
              Deep Cleaning
            </div>
            <div className="ItemsServices" data-aos="fade-right">
              <ItemStarIcon />
              Moving Cleaning
            </div>
            <div className="ItemsServices" data-aos="fade-right">
              <ItemStarIcon />
              Standard Cleaning
            </div>
          </div>
          <div className="ContainerVideo" data-aos="zoom-in">
            <video controls>
              <source src={myVideo} type="video/mp4"></source>
            </video>
          </div>
        </div>
        <br className="" />
        <h1 className="ItemTitle">Gallery</h1>
        <div className="ContainerImgenes">
          <img src={bcs1} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs2} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs3} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs4} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs5} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs6} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs7} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs8} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs9} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs10} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs11} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs12} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs13} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs14} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs15} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs16} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs17} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs18} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs19} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs20} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs21} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs22} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs23} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs24} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs25} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs26} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs27} alt="" className="ImgItem" data-aos="zoom-in" />
          <img src={bcs29} alt="" className="ImgItem" data-aos="zoom-in" />
        </div>
      </div>
      <br className="" />
    </StyledServicesScreen>
  );
};

export default ServicesScreenComponent;
