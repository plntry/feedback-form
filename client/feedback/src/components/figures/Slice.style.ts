import styled from "styled-components"

export const Slice = styled.div`
    position: absolute;
    border-radius: 50%;
    box-shadow: ${props => props.theme.boxShadow1} ${props => props.theme.boxShadow2} 0px 0px #fff;
    width: ${props => props.theme.width};
    height: ${props => props.theme.height};
    left: ${props => props.theme.left};
    top: ${props => props.theme.top};
    z-index: ${props => props.theme.zIndex};
    transform: rotate(${props => props.theme.transformDegrees});

    @media (max-width: ${props => props.theme.maxWidthForMedia}) {
        display: none;
    }
`;