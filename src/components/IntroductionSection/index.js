import React, {useState} from 'react'
import { IntroContainer, IntroBackground, VideoBackground, IntroContent, IntroHeader, IntroP, IntroBtnWrapper, ArrowForward, ArrowRight   } from './IntroElements'
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';


const IntroductionSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    } 

    return (
        <IntroContainer>
            <IntroBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video.mp4'>

                </VideoBackground>
            </IntroBackground>
            <IntroContent>
                <IntroHeader>David Quines</IntroHeader>
                <IntroP>
                    Aspiring Software Engineer with emphasis in Full Stack Development for mobile and web applciations.
                </IntroP>
                <IntroBtnWrapper>
                    <Button to= "resume" onMouseEnter={onHover} onMouseLeave={onHover} >
                        Get In Touch {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </IntroBtnWrapper>
            

            </IntroContent>
        </IntroContainer>
    )
}

export default IntroductionSection
