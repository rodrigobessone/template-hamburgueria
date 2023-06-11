import styled from "styled-components";
import Theme from "../styles/Theme";

const StyledDivInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 8.6875rem;
  background-color: ${Theme.colors.grey0};
  justify-content: space-between;
  padding: 1.4375rem;
  border-top: 2px solid ${Theme.colors.grey100};
  background-color: #ffffff;

  div:first-child {
    display: flex;
    justify-content: space-between;
  }

  span {
    color: ${Theme.colors.grey300};;
    font-size: 1rem;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    font-weight: 600;
    color: ${Theme.colors.grey600};
    font-family: "Inter";

   
  }
`;

export default StyledDivInfo;
