import React, { useState, useEffect } from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { FaBars } from 'react-icons/fa'
import './Navbar.css';
import resume from "../../assets/resume.pdf"
import {animateScroll as scroll} from 'react-scroll'




const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, [])

    const toggleHome = () => {
       scroll.scrollToTop()
    
    }
    return (
        <>
             <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>
                            David Quines
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about"
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-5} 
                                activeClass="active"
                                >
                                    About Me
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="experience" smooth={true} duration={500} spy={true} exact='true' offset={-5} activeClass="active">
                                    Experience
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-5} activeClass="active">
                                    Projects
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-5} activeClass="active">
                                    Contact Me
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to={resume} target="_blank">
                                Resume
                            </NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            
        </>
    )
}


export default Navbar




