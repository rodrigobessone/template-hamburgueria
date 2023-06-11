import React from "react";
import styled from "styled-components";
import Theme from "../../styles/Theme";

const StyledCartBadge = styled.div`
  background-color: ${Theme.colors.Colorprimary};
  border-radius: 0.5rem;
  width: 1.25rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: center;
  bottom:15px;
  left: 16px;
  
  span {
    font-size: 12px;
    color: #ffffff;
    font-weight: 900;
    
  }
`;

export default StyledCartBadge;