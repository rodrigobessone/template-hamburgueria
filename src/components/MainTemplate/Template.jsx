import React from "react";
import StyledMain from "./StyledMain";

import HeaderComponent from "../Header/Header";

function Template({ children, setModalState , handleSearch, productsCart}) {
  
  return (
    <>
      <HeaderComponent setModalState={setModalState} handleSearch={handleSearch} productsCart={productsCart}/>
      <StyledMain>{children}</StyledMain>
    </>
  );
}

export default Template;