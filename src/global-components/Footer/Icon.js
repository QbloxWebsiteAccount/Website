// Components==============
import icon from "assets/qblox_icon.svg";
import React from "react";
import styled from "styled-components";

// =========================

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  margin-bottom: ${({ theme: { spacing } }) => spacing[9]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    flex-direction: column;
    width: initial;
    height: 230px;
  }
`;

const Logo = styled.img`
  width: 100px;
`;

const Bar = styled.div`
  height: 4px;
  width: 50px;
  background: white;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    height: 45px;
    width: 4px;
  }
`;

export default function Icon() {
  return (
    <IconWrapper>
      <Bar />
      <Logo src={icon} alt="QBlox icon" />
      <Bar />
    </IconWrapper>
  );
}
