import React, { useEffect } from "react";
import { StyledNavBar } from "./StyledNavBar";
import { Link } from "react-router-dom";
import Icon from "./../../Controls/Icon/Icon";

export const NavBarComponent = (props) => {
  return (
    <StyledNavBar>
      <div className="NavBarContainer">
        <div />
        <div className="ContainerItems">
          <Link
            href="/home"
            to="/home"
            style={{ textDecoration: "none" }}
            className="ItemNav"
          >
            <span className="ButtonNav">
              <Icon iconName="home" size={48} iconColor="black" />
            </span>
            <div>Home</div>
          </Link>
          <Link
            href="/services"
            to="/services"
            style={{ textDecoration: "none" }}
            className="ItemNav"
          >
            <span className="ButtonNav">
              <Icon iconName="star" size={48} iconColor="black" />
            </span>
            <div>Our Services</div>
          </Link>
          <Link
            href="/contact"
            to="/contact"
            style={{ textDecoration: "none" }}
            className="ItemNav"
          >
            <span className="ButtonNav">
              <Icon iconName="cardContact" size={48} iconColor="black" />
            </span>
            <div>Contact Us</div>
          </Link>
        </div>
      </div>
      <br className="" />
    </StyledNavBar>
  );
};

export default NavBarComponent;
