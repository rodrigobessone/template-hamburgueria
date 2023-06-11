import styled from "styled-components";
import Theme from "../../styles/Theme";

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${Theme.colors.grey0};
  @media(max-width: 48rem){
  height: 9.5rem;
  padding: 0.5rem;
}
`;
export default StyledHeader;
