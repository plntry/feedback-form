import styled from "styled-components"

export const FormInput = styled.input`
    box-sizing: border-box;
    padding-left: 46px;
    padding-right: 46px;
    width: 557px;
    height: 93px;
    font-family: 'Apercu Arabic Pro';
    font-size: 18px;
    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    border-radius: 10px;

    ::placeholder {
        font-style: normal;
        font-weight: 400;   
        line-height: 180%;
        color: #2D2D2D;
    }

    @media (max-width: 568px) {
        width: 85vw;
    }
`;