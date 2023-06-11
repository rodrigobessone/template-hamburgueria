import styled from "styled-components";

const StyledMain = styled.main`
  max-width: 85.5rem;
  margin: 2rem auto;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
    margin: 2.4375rem 1rem;
  }
`;

export default StyledMain;