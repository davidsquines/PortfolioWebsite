import React from 'react';
import icon1 from '../../images/chorosX.jpg';
import icon2 from '../../images/gotgains.png';
import githubIcon from '../../images/arrow.png'
import eureqaVid from '../../videos/eureqavideo.mp4';
import gotGainsVid from '../../videos/gotgains.mp4';
import chorosXVid from '../../videos/chorosX.mp4';

import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsH2, ProjectsP, ArrowIcon, VideoBackground, TechUsedP } from './ProjectsElements'
const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsWrapper>

                    <ProjectsCard>{/*This card will contain the projects I have worked on, some in github*/}
                        <a href="https://github.com/davidsquines/GotGainz" target="_blank" >
                            <ArrowIcon src={githubIcon} />
                        </a>
                        <ProjectsH2>Got Gains</ProjectsH2>
                     
                        <TechUsedP>Flutter</TechUsedP>
                        <br/>
                        <a href="https://www.youtube.com/watch?v=QqPSf_KAQnw" target="_blank">
                            <VideoBackground autoPlay loop muted src={gotGainsVid} type='gotgains.mp4'/>
                        </a>
                        <br/>
                        <ProjectsP>A fitness mobile application designed to help users with thier workout journey.</ProjectsP>
                    </ProjectsCard>
                <ProjectsCard>{/*This card will contain the projects I have worked on, some in github*/}
                        <a href="https://github.com/ChorosX" target="_blank" >
                        <ArrowIcon src={githubIcon} />
                        </a>
                    <ProjectsH2>ChorosX</ProjectsH2>
                    <TechUsedP>React.js  |  Firebase  |  Flask  |  Three.js </TechUsedP>
                        <br/>
                         <a href="https://www.youtube.com/watch?v=A-Fs6QKgs2g" target="_blank">
                            <VideoBackground autoPlay loop muted src={chorosXVid} type='chorosX.mp4'/>
                        </a>
                        <br/>
                    <ProjectsP>A live satellite tracking web application that shows the real time postions of well known satellites in Earth's orbit</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>{/*This card will contain the projects I have worked on, some in github*/}
                        <a href="https://github.com/ProjectEureka" target="_blank" >
                        <ArrowIcon src={githubIcon} />
                        </a>
                       
                    <ProjectsH2>EureQa</ProjectsH2>
                    <TechUsedP>Flutter  |  SpringBoot  |  AWS  | MongoDB  |  Firebase</TechUsedP>
                        <br/>
                        <a href="https://www.youtube.com/watch?v=K7oCw8ajz5w" target="_blank">
                            <VideoBackground autoPlay loop muted src={eureqaVid} type='eureqavideo.mp4'/>
                        </a>
                        <br/>
                    <ProjectsP>A Mobile Application that allows users to get quick answers to the questions relating to various topics.</ProjectsP>
                    
                </ProjectsCard>
                
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
