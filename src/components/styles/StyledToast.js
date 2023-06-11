import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import Theme from "./Theme";

const StyledToast = styled(ToastContainer)`

.Toastify__progress-bar--success {
    background-color: ${Theme.colors.Colorprimary}
}
.Toastify__toast--success {
    color: ${Theme.colors.Colorprimary};
    .Toastify__toast-body {}
    svg{
        fill: ${Theme.colors.Colorprimary};
    }
}


`
export default StyledToast