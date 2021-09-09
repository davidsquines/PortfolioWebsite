import React, { useState } from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { FaBars } from 'react-icons/fa'
import './Navbar.css';



const Navbar = ({toggle}) => {
    return (
        <>
             <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            David Quines
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about">
                                    About Me
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="experience">
                                    Experience
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="projects">
                                    Projects
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/">
                                    Contact Me
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/resume">
                                Resume
                            </NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            
        </>
    )
}


export default Navbar




