import styled from "styled-components";
import Theme from "../styles/Theme";

const StyledButton = styled.button`
  width: 6.625rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background-color: ${Theme.colors.grey200};
  border: none;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Inter";
  color: #ffffff;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${Theme.colors.Colorprimary};

  }
`;
export default StyledButton;
