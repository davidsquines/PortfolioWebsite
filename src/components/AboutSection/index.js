import React from 'react'
import { Img, Column2, ImgWrap, AboutContainer, AboutWrapper, AboutRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap } from './AboutElements'
import {Button} from '../ButtonElement';
const About = ({lightBg, imgStart, topLine, lightText, darkText, subtitle, buttonLabel, id, headLine
, img, alt, primary, dark, dark2 }) => {
    return (
        <AboutContainer lightBg={lightBg} id={id}>
            <AboutWrapper>
                <AboutRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle darkText={darkText}>{subtitle}</Subtitle>
                        <BtnWrap>
                            <Button to='projects'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={20}
                            primary={primary ? 1: 0}
                            dark={dark ? 0 : 1}
                            dark2={dark2 ? 1 : 0}
                            
                            >{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About
