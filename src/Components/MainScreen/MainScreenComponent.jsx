import React, { useEffect } from "react";
import { CardValue } from "./../Cards/CardValue";
import { StyledMainScreen } from "./StyledMainScreen";
import Blancas3 from "../../Assets/Blancas3.png";
import camelias from "../../Assets/Camelia.png";
import deepCleaning from "../../Assets/deep-cleaning-services.jpg";
import movingCleaning from "../../Assets/move-out-cleaning-services.jpg";
import standardCleaning from "../../Assets/service-cleaning.jpg";

export const MainScreenComponent = (props) => {
  return (
    <StyledMainScreen>
      <div className="ContainerDefault">
        <div className="ContainerHeader">
          <div className="DivImg">
            <img src={Blancas3} alt="" className="ImgHome" data-aos="zoom-in" />
          </div>
          <div>
            <div className="WelcomeTitle">Welcome,</div>
            <div className="Subtitle">we offer the following services</div>
            <br className="" />
            <div className="ServicesContainer">
              <div>
                <div className="TextAvatar">Deep Cleaning</div>
                <div className="ItemAvatar" data-aos="zoom-in">
                  <img src={deepCleaning} alt="" />
                </div>
              </div>
              <div>
                <div className="TextAvatar">Moving Cleaning</div>
                <div className="ItemAvatar" data-aos="zoom-in">
                  <img src={movingCleaning} alt="" />
                </div>
              </div>
              <div>
                <div className="TextAvatar">Standard Cleaning</div>
                <div className="ItemAvatar" data-aos="zoom-in">
                  <img src={standardCleaning} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="Subtitle">Our Values</div>
          <br className="" />
          <div className="ValuesContainer">
            <CardValue
              titleCard="Responsability"
              bodyCard="Perform a professional and complete service."
              data-aos="zoom-in"
            />
            <CardValue
              titleCard="Commitment"
              bodyCard="Deliver excellence in our services."
              data-aos="zoom-in"
            />
            <CardValue
              titleCard="Respect"
              bodyCard="Having a professional behavior at all times."
              data-aos="zoom-in"
            />
            <CardValue
              titleCard="Confidence"
              bodyCard="Demonstrating openness and honesty at all times."
              data-aos="zoom-in"
            />
            <CardValue
              titleCard="Quality"
              bodyCard="Provide an efficient and complete service."
              data-aos="zoom-in"
            />
          </div>
          <br className="" />
        </div>
      </div>
    </StyledMainScreen>
  );
};

export default MainScreenComponent;
