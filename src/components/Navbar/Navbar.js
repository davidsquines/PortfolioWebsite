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
                            dolla
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
                                <NavLinks to="Experiance">
                                    Experiance
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="Projects">
                                    Projects
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="Awards">
                                    Awards
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




/*
function Navbar() {
    const [click , setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return(
        <>
            <nav className='navbar'>
          
                <Link to='/' className='navbar-logo'>
                    David Quines 
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
             </div>
             <ul className={click ? 'nav-menu active' : 'nav-menu'}  >
                <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About Me
                         
                        </Link>
                </li>
                 <li className='nav-item'>
                     <Link to='/Projects' className='nav-links' onClick={closeMobileMenu}>
                         Projects 
  
                     </Link>
                 </li>
                 <li className='nav-item'>
                     <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                         Contact Me 
                        
                     </Link>
                 </li>
             </ul>
            </nav>
        </>
    );
}

export default Navbar;
*/