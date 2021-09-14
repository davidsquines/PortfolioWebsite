import React from 'react'
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import { ExperienceContainer, TabsContent, TabContentHeader, SubTabContent, TabContainer, BulletedList, ExperienceH1, ExperienceWrapper, SubtitleH3, SubtitleH5 } from './ExperianceElements';
import './tabsStyles.css';

const Experiance = () => {
    return (

        <ExperienceContainer id="experience">
            <ExperienceH1>Experience</ExperienceH1>
            <ExperienceWrapper>
            <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs" id="experiance">
                <TabList>
                    <Tab tabFor="vertical-tab-one"><TabsContent>ARCS</TabsContent></Tab>
                    <Tab tabFor="vertical-tab-two"><TabsContent>Academic Enrichment Center</TabsContent></Tab>
                    <Tab tabFor="vertical-tab-three"><TabsContent>Matahacks 2021 - Winner </TabsContent></Tab>
                    <Tab tabFor="vertical-tab-four"><TabsContent>Senior Design Showcase 2021 - Winner </TabsContent></Tab>
                </TabList>

                <TabPanel tabId="vertical-tab-one">
                 
                        <TabContentHeader> ARCS Associate</TabContentHeader>
                            <SubtitleH3> Cloud Engineer @ The Autonomy Research Center for STEAHM - CSUN</SubtitleH3>
                            <SubtitleH5> January 2021 - Present</SubtitleH5>
                            <SubTabContent>
                               <BulletedList><li>Currently Involved in a CSUN ARCS research project as a Back-End/Cloud engineer, whose objective is to create a system that will ensure trust between machine learning services and aircraft and operating pilots.</li></BulletedList>
                               <BulletedList><li>Develop documentation on cloud infrastructure for server infrastructure</li></BulletedList>
                               <BulletedList><li>Provision and manage cloud-hosted application infrastructure using TerraForm</li></BulletedList>
                               <BulletedList><li>Developed in a team-based agile enviornment</li></BulletedList>
                            </SubTabContent>
                </TabPanel>

                <TabPanel tabId="vertical-tab-two">
                    <TabContainer>
                        <TabContentHeader> Instructional Student Assistant</TabContentHeader>
                        <SubtitleH3> Tutor @ Academic Enrichment Center of CSUN</SubtitleH3>
                        <SubtitleH5> January 2020 - May 2021</SubtitleH5>
                            <SubTabContent>
                            <BulletedList>
                                <li>Courses Tutored: Computer Architecture and Assembly
                                                Language, Data Structures and Algorithms, Discrete
                                                Structure For Computer Science, Advanced Data Structures,
                                                and Automata, Languages, and Computation.
                                </li></BulletedList>
                               <BulletedList><li>Backed up professor instruction by covering course relevant material.</li></BulletedList>
                               <BulletedList><li>Managed virtual tutoring sessions on a virtual enviornment via Zoom</li></BulletedList>
                               <BulletedList><li>Located errors in students' code and explained the source of the bug and how to fix it.</li></BulletedList>
                            </SubTabContent>
                        
                    </TabContainer>
                </TabPanel>

                <TabPanel tabId="vertical-tab-three">
                    <TabContainer>
                        <TabContentHeader> ChorosX - First Place Winner</TabContentHeader>
                        <SubtitleH3> First Place Winner of CSUN's 2021 Matahacks Hackathon </SubtitleH3>
                        <SubtitleH5> March 2021</SubtitleH5>
                            <SubTabContent>
                                <BulletedList><li>Created a Live Satellite Tracking Application over the course of 48 hours.</li></BulletedList>
                               <BulletedList><li>Displays real time locations of several well known satellites around a three-dimensional, fully interactive model of the Earth using React.js</li></BulletedList>
                               <BulletedList><li>Responsible for creating the backend application using Firebase, Flask, and a satelite api called NY20.</li></BulletedList>
                                
                            </SubTabContent>
                     
                    </TabContainer>
                </TabPanel>
                <TabPanel tabId="vertical-tab-four">
                    <TabContainer>
                        <TabContentHeader> EureQa - First Place Winner</TabContentHeader>
                        <SubtitleH3> First Place Winner of CSUN's 2021 Senior Design Project Showcase</SubtitleH3>
                        <SubtitleH5> August 2020 - May 2021</SubtitleH5>
                            <SubTabContent>
                                <BulletedList><li>Created a Questionaire Mobile Application designed to bring users answers to questions regarding lifestyle, technology, and education.</li></BulletedList>
                               <BulletedList><li>Developed in a team-based environment using an agile ideology with Github and Jira.</li></BulletedList>
                               <BulletedList><li>Desinged and implemented a chat system using Firebase and Flutter.</li></BulletedList>
                                
                            </SubTabContent>
                     
                    </TabContainer>
                </TabPanel>
            </Tabs>

            </ExperienceWrapper>

            

        </ExperienceContainer>
            


   
    )
}

export default Experiance
