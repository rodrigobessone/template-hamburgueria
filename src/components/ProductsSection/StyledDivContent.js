import styled from "styled-components";
import Theme from "../styles/Theme";

const StyledDivContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 1.375rem;

  h3{
    margin-top: 1.625rem;
    font-size: 1.125rem;
    font-weight: 700;
    color: ${Theme.colors.gray600};
  }

  span {
    font-weight: 400;
    font-size: 0.75rem;
    color: ${Theme.colors.grey300};
  }

  p {
    font-size: 0.875rem;
    color: ${Theme.colors.Colorprimary};
    font-weight: 600;
  }
  `;
export default StyledDivContent;
