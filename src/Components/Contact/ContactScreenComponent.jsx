import React from "react";
import Icon from "../../Controls/Icon/Icon";
import { StyledContactScreen } from "./StyledContactScreen";

export const ContactScreenComponent = (props) => {
  return (
    <StyledContactScreen>
      <br className="" />
      <div className="ContactContainer" data-aos="zoom-in">
        <div className="HeaderContact">Contact Us</div>
        <div className="BodyContact">
          <br className="" />
          <div className="ItemText" data-aos="fade-left">
            <Icon size={48} iconName="user" />
            <div>Contact Name: Blanca Rivera</div>
          </div>
          <div className="ItemText">
            <Icon size={48} iconName="location" data-aos="fade-right" />
            <div>Location: 54 Monroe Street, Newark, New Jersey 07105</div>
          </div>
          <div className="ItemText" data-aos="fade-left">
            <Icon size={48} iconName="mail" />
            <div style={{ wordBreak: "break-all" }}>
              E-mail: blancascleaningservices067@gmail.com
            </div>
          </div>
          <div className="ItemText">
            <Icon size={48} iconName="phone" data-aos="fade-right" />
            <div className="">Phone: +1 (908) 294-4122</div>
          </div>
          <h3 className="">Our Networks</h3>
          <div className="ItemText" data-aos="fade-left">
            <Icon size={48} iconName="whatsApp" />

            <div className="">WhatsApp: +1 (908) 294-4122</div>
          </div>
          <div className="ItemText">
            <Icon size={48} iconName="instagram" data-aos="fade-right" />
            <span className="">
              Instagram:{" "}
              <a href="https://www.instagram.com/blancarivera259/">
                @blancarivera259
              </a>
            </span>
          </div>
          <br className="" />
        </div>
        <div className="BottomContact">
          We are ready to give you a quality service
        </div>
      </div>
      <br className="" />
    </StyledContactScreen>
  );
};

export default ContactScreenComponent;
