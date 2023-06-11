import React from "react";
import StyledItem from "./StyledItem";
import StyledDivImg from "./StyledDivImg";
import StyledDivContent from "./StyledDivContent";
import StyledButton from "./StyledButton";

function ProductItem({ product, addItem }) {
  function handleAddToCart (){
   addItem(product)
  }
  return (
    <StyledItem>
      <StyledDivImg>
        <img src={product.img} alt="image" />
      </StyledDivImg>
      <StyledDivContent>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <p>R$ {product.price.toFixed(2).replace(".", ",")}</p>
        <StyledButton onClick={handleAddToCart}>Adicionar</StyledButton>
      </StyledDivContent>
    </StyledItem>
  );
}

export default ProductItem;
