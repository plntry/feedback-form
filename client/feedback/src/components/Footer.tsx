import { FooterContainer } from "./Container.style"
import { FooterStyled } from "./Footer.style"
import { FooterGreenFigure } from "./FooterGreenFigure.style"


export const Footer = () => {
    return (
        <>
        <FooterGreenFigure />
            <FooterContainer>
                
                <i className="fa fa-linkedin" aria-hidden="true" style={{color: "#666666"}}></i>
                <i className="fa fa-twitter" aria-hidden="true" style={{color: "#666666"}}></i>
                <i className="fa fa-facebook" aria-hidden="true" style={{color: "#666666"}}></i>
                <i className="fa fa-pinterest-p" aria-hidden="true" style={{color: "#666666"}}></i>
            </FooterContainer>
            
        </>
        
    )
}