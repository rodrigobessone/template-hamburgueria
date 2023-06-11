import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
width: 12.5rem;
height: 2.5rem;    

&:hover {
    transform: scale(1.5);
    transition: all 0.8s ease-in-out;
}
@media(max-width: 768px){
    width: 86%;
}
`

export default StyledLogo;