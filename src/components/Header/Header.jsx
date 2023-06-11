import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledCartBadge from "./StylesHeader/StyledCartBadge";
import StyledHeader from "./StylesHeader/StyledHeader";
import StyledLogo from "./StylesHeader/StyledLogo";
import StyledRightDiv from "./StylesHeader/StyledRightDiv";
import StyledSearchDiv from "./StylesHeader/StyledSearchDiv";
import InputSearch from "../InputSearchComponent/InputSearch";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import StyledDiv from "./StylesHeader/StyledDiv";
import { StyledCardContainer } from "./StylesHeader/StyledCardContainer";
import { StyledIconCart } from "./StylesHeader/StyledCartIcon";
import StyledHeaderWrap from "./StyledHeaderWrap";


function HeaderComponent({setModalState, productsCart, handleSearch}) {

 const productsQuantity = productsCart.reduce((acc , product) => acc + product.quantity,0);

  function handleOpenModal() {
    setModalState(true);
  }
  return (
    <StyledHeader>
      <StyledDiv>
 
          <StyledHeaderWrap>
            <StyledLogo>
              <img src="/logo.svg" alt="logo" />
            </StyledLogo>
                <StyledCardContainer onClick={handleOpenModal}>
                    <StyledIconCart icon={faCartShopping} />
                  <StyledCartBadge>
                      <span>{productsQuantity}</span>
                  </StyledCartBadge>
                </StyledCardContainer>
          </StyledHeaderWrap>

        <StyledRightDiv>
          <div>

            <StyledSearchDiv>
              <InputSearch handleSearch={handleSearch}/>
              <div>
                <FontAwesomeIcon icon={faSearch} />
                </div>
            </StyledSearchDiv>
          </div>
        </StyledRightDiv>
      </StyledDiv>
    </StyledHeader>
  );
}

export default HeaderComponent;
