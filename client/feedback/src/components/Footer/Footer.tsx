import { FooterContainer } from "../Container.style"
import { FooterGreenFigure } from "../figures/FooterGreenFigure.style"
import { Slice } from "../figures/Slice.style"
import { themeSlice10, themeSlice11, themeSlice12 } from "../stylesThems/sliceThems"

export const Footer = () => {
    return (
        <>
        <FooterGreenFigure>
                <Slice theme={themeSlice10} />
                <Slice theme={themeSlice11} />
                <Slice theme={themeSlice12} />
        </FooterGreenFigure>
            <FooterContainer>
                <i className="fa fa-linkedin" aria-hidden="true" style={{color: "#666666"}}></i>
                <i className="fa fa-twitter" aria-hidden="true" style={{color: "#666666"}}></i>
                <i className="fa fa-facebook" aria-hidden="true" style={{color: "#666666"}}></i>
                <i className="fa fa-pinterest-p" aria-hidden="true" style={{color: "#666666"}}></i>
            </FooterContainer>
        </> 
    )
}