import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Theme from "../styles/Theme";


export const StyledIconTrash = styled (FontAwesomeIcon)`
font-size: 1.125rem;
font-weight: 900;
color: ${Theme.colors.grey200};

&:hover {
    transform: scale(1.2);
    transition: all 0.5s ease-in-out;
    color: ${Theme.colors.grey300};
  }
`