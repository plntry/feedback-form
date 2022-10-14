import styled from "styled-components"

export const Circle = styled.div`
    position: absolute;
    border-radius: 50%;
    width: ${props => props.theme.width};
    height: ${props => props.theme.height};
    left: ${props => props.theme.left};
    top: ${props => props.theme.top};
    z-index: ${props => props.theme.zIndex};
    background: ${props => props.theme.bgColor};

    transform: rotate(-35.19deg);

    @media (max-width: ${props => props.theme.maxWidthForMedia}) {
        display: none;
    }
`;