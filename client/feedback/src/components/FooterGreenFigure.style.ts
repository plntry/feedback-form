import styled from "styled-components"

export const FooterGreenFigure = styled.div`
    /* position: absolute;
    left: 2%;
    top: 887px;
    height: 210px;
  width: 210px;
  border-radius: 50%; */
    background: #46EBB0;
/* margin-top:887px; */
    /* width: 210px;
    height: 210px;
    border-radius: 50%;
    position: relative;
    z-index: 5;
    right: 45%;
    bottom: -2rem; */
    width: 78.46px;
    height: 97px;
    /* border-radius: 50%; */
    position: absolute;
    z-index: 1;
    left: 85vw;
    top: 55.3rem;
    border-bottom-left-radius: 50% 40%;
    border-bottom-right-radius: 50% 40%;

   @media (max-width: 1280px) {
      top: 40rem;
    }

    @media (max-width: 622px) {
      border-bottom-left-radius: 0% 0%;
      border-bottom-right-radius: 0% 0%;
      border-top-left-radius: 50% 40%;
      border-top-right-radius: 50% 40%;
      top: 46.5rem;
      left: 75vw;
    }
`;