import React from "react";
import styled from "styled-components";

const StyledItemStarIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemStarIcon = () => (
  <StyledItemStarIcon>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      width="48"
      viewBox="0 0 48 48"
    >
      <g>
        <path
          id="path1"
          transform="rotate(0,24,24) translate(11,11) scale(0.8125,0.8125)  "
          fill="#0b6a0b"
          d="M15.998993,5.6780396L12.681,12.743042 5.2630005,13.877014 10.631989,19.378052 9.3639984,27.147034 15.998993,23.480042 22.634995,27.147034 21.365997,19.378052 26.735001,13.877014 19.317001,12.743042z M15.998993,0L20.942993,10.533997 32,12.223022 23.998993,20.421997 25.886993,32 15.998993,26.533997 6.1109924,32 7.9989929,20.421997 0,12.223022 11.054993,10.533997z"
        />
      </g>
    </svg>
  </StyledItemStarIcon>
);
