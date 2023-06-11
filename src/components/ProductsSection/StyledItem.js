import styled from "styled-components";
import Theme from "../styles/Theme";

const StyledItem = styled.li`
width: 18.75rem;
height: 21.625rem;
border-radius: 0.5rem;
overflow: hidden;
border: 1px solid ${Theme.colors.grey100};

&:hover {
    border-color: ${Theme.colors.Colorprimary};
    transform: scale(1.05);
    transition: all 0.5s ease-in-out;
    box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.15);
  }

&:hover button{
    background-color: ${Theme.colors.Colorprimary};
}
img {
    height: 9.375rem;
}

&:hover img {
    transform: scale(1.3);
    transition: all 0.5s ease-in-out;
  }
  
`
export default StyledItem;