import styled from "styled-components"

export const FormTextarea = styled.textarea`
    box-sizing: border-box;
    padding-left: 46px;
    padding-right: 46px;
    padding-top: 31px;
    width: 557px;
    height: 189px;
    line-height: 1.5em;
    font-family: 'Apercu Arabic Pro';
    font-size: 18px;
    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    border-radius: 10px;
    resize: none;

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