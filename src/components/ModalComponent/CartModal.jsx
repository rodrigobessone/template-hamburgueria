import React from "react";
import StyledModal from "./StyledModal";
import StyledRemoveAll from "./StyledRemoveAll";
import StyledDivInfo from "./StyledDivInfo";
import StyledList from "./StyledList";
import StyledItem from "./StyledItem";
import { StyledIconTrash } from "./StyledIconTrash";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import StyledDivImg from "./StyledDivImg";
import StyledDivContent from "./StyledDivContent";
import StyledModalHeader from "./StyledModalHeader";



function CartModal({ setModalState, productsCart, modalRef, removeItem, setProductsCart }) {
  
  const handleToDelete = (productId) => {
    removeItem(productId);
  };

  const total = productsCart.reduce((acc, product) => acc + product.price * product.quantity,0)

  return (
    <StyledModal ref={modalRef}>
    <StyledModalHeader>
      <h2>Carrinho de compras</h2>
      <img
        onClick={() => {
          setModalState(false);
        }}
        src="/X.svg"
        alt="X"
      />
    </StyledModalHeader>
    <StyledList>
      {productsCart.map((product) => (
        <StyledItem key={product.id}>
          <StyledDivImg>
            <img src={product.img} alt={product.name} />
            <span>R${product.price.toFixed(2).replace(".", ",")}</span>
            <p>{product.quantity}</p>
          </StyledDivImg>
          <StyledDivContent>
            <h3>{product.name}</h3>
            <StyledIconTrash
              icon={faTrash}
              onClick={() => handleToDelete(product.id)}
              />
          </StyledDivContent>
        </StyledItem>
      ))}
    </StyledList>
    <StyledDivInfo>
      <div>
        <p>Total</p>
        <span>R${total.toFixed(2).replace(".", ",")}</span>
      </div>
      <StyledRemoveAll onClick={()=>{setProductsCart([])}}>Remover todos</StyledRemoveAll>
    </StyledDivInfo>
  </StyledModal>
);
}

export default CartModal;
