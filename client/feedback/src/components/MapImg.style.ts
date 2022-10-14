import styled from "styled-components"
import mapUrl from "../images/image_2022-10-13_20-40-46.png"

export const MapImg = styled.div`
    background: url(${mapUrl});
    width: 60rem;
    height: 60rem;
    border-radius: 50%;
    position: absolute;
    z-index: -1;
    left: 60%;
    top: -5rem;

    @media (max-width: 1280px) {
        display: none;
    }
`;