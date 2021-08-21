import React from "react";
import PropTypes from "prop-types";
import { IconSvgStyled, IconDivStyled } from "./IconStyled";
import { iconsSvgData } from "./iconsData";

const Icon = ({ size, iconName, iconColor, children }) => {
  const selectedIcon = iconsSvgData.find((x) => x.id === iconName);

  return (
    <IconDivStyled className="center">
      <IconSvgStyled
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        width={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <g>
          <path fill={iconColor} {...selectedIcon} />
        </g>
      </IconSvgStyled>
    </IconDivStyled>
  );
};

Icon.propTypes = {
  size: PropTypes.number.isRequired,
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  children: PropTypes.any,
};

Icon.defaultProps = {
  iconColor: "black",
  size: 48,
};

export default Icon;
