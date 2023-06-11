import React from "react";
import ProductItem from "./ProductItem";
import StyledSection from "./StyledSection";
import StyledList from "./StyledList";
import StyledItem from "./StyledItem";

function SectionProducts({ products , addItem }) {
  return (
    <StyledSection>
      <StyledList>
          {products.map((product) => (
            <ProductItem  key={product.id} product={product}  addItem={addItem}/>
          ))}
      </StyledList>
    </StyledSection>
  );
}

export default SectionProducts;
