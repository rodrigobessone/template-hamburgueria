import styled from "styled-components";
import Theme from "../styles/Theme";

const StyledRemoveAll = styled.button`
width: 28.375rem;
height: 3.75rem;
padding: 1.4375rem;
background-color: ${Theme.colors.grey100};
color: ${Theme.colors.grey300};
border-radius: .5rem;
border: none;
margin-top: 1.25rem;
font-family: 'Inter';
font-size: .875rem;
font-weight: 600;

&:hover {
    background-color: ${Theme.colors.grey300};
    transform: scale(1.05);
    transition: all 0.5s ease-in-out;
    color: ${Theme.colors.grey100};
    box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.15);
  }
`

export default StyledRemoveAll;