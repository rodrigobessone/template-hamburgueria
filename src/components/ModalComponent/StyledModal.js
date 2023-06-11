import styled from "styled-components";
import Theme from "../styles/Theme";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 31.25rem;
  height: 28.125rem;
  background-color: #ffffff;
  border-radius: 0.25rem;
  border: 1px solid ${Theme.colors.grey300};
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    color: #ffffff;
    font-family: "Inter";
  }

`;

export default StyledModal;
