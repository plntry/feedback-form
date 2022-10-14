import styled from "styled-components"

export const AppContainer = styled.div`
    font-family: 'Apercu Arabic Pro';
    display: flex;
    flex-direction: column;

    @media (max-width: 1280px) {
        justify-content: center;
        align-items: center;
    }
`;

export const InputsContainer = styled.div`
    font-family: 'Apercu Arabic Pro';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

export const FooterContainer = styled.div`
    margin-top: 130px;
    height: 200px;
    font-family: 'Apercu Arabic Pro';
    display: flex;
    gap: 25px;
    padding-left: 343px;
    align-items: center;
    border: 1px solid #D8D8D8;
    background: #FAFAFA;

    @media (max-width: 1280px) {
        width: 100vw;
        margin-top: 25px;
        padding-left: 0px;
        justify-content: center;
    }
`;