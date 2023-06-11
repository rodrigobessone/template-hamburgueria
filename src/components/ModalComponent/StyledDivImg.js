import styled from "styled-components";
import Theme from "../styles/Theme";

const StyledDivImg = styled.div`
  display: flex;
  min-width: 79px;
  max-width: 80px;
  background-color: ${Theme.colors.grey0};
  overflow: hidden;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 3.4375rem;
    height: 3.3125rem;
    margin-bottom:20px;
  }
  span {
    font-size: 0.6rem;
    color: ${Theme.colors.grey0};
    background-color: ${Theme.colors.Information};
    padding: 0.25rem;
    border-radius: 0.125rem;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  
  p {
    font-size: 0.6rem;
    color: #ffffff;
    position: absolute;
    right: 0;
    color: ${Theme.colors.grey0};
    background-color: ${Theme.colors.gray600};
    padding: 0.25rem;
    bottom: 0;
    border-radius: 0.125rem;
  }
  */
`;

export default StyledDivImg;
