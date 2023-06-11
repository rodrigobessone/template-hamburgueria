import styled from "styled-components";
import Theme from "../styles/Theme";

const StyledModalHeader = styled.div`

    width: 31.25rem;
    height: 3.375rem;
    background-color: ${Theme.colors.Colorprimary};
    display: flex;
    justify-content: space-between;
    padding: 1.375rem;
    align-items: center;
   
    img:hover {
      transform: scale(1.5);
      transition: all 0.8s ease-in-out;
  `
export default StyledModalHeader