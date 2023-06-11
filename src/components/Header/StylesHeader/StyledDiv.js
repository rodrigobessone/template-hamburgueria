import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  max-width: 85.5rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;  
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  @media (max-width: 768px) {
    flex-wrap:wrap;
    justify-content: center;
  }
`;

export default StyledDiv;
