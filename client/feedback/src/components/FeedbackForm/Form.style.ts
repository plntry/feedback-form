import styled from "styled-components"

export const Form = styled.form`
    width: 563px;
    min-height: 575px;
    margin-left: 147px;
    margin-top: 179px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1280px) {
        margin-left: auto;
        margin-top: 40px;
    }

    @media (max-width: 568px) {
        width: 85vw;
    }
`;