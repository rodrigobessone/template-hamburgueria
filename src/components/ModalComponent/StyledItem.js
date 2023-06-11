import styled from "styled-components";
import Theme from "../styles/Theme";

const StyledItem = styled.li`
display: flex;
height: 5rem;
margin-top: 1.25rem;
min-height: 5.5rem;
border-radius: .5rem;
border: 1px solid ${Theme.colors.grey100};
`

export default StyledItem;