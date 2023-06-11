import styled from "styled-components";
import Theme from "../../styles/Theme";


const StyledSearchDiv = styled.div`
    width: 22.8125rem;
    height: 3.75rem;
    background-color: #ffffff;
    border-radius: 0.5rem;
    padding: 0.5rem;

    input {
        width: 80%;
        border-radius: 0.5rem;
        outline: none;
        padding: 1rem;
        font-size: 1.25rem;
    }

    div {
        background-color: ${Theme.colors.Colorprimary};
        width: 3.3125rem;
        height: 2.5rem;
        color: #ffffff;
        border-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div:hover {
        transform: scale(1.05);
        transition: all 0.5s ease-in-out;
        box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.15);
      }
@media(max-width: 768px){
    width: 100%;
    input{
        width: 100%;
    }
}
`

export default StyledSearchDiv;