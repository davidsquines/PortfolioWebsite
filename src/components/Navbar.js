import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { Button } from "./Button";



function Navbar() {
    const [click , setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return(
        <>
            <nav className='navbar'>
          
                <Link to='/' className='navbar-logo'>
                    Fixed 
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
// class NavBar extends Component {

//     //when icon is clicked 
//     // state = { clicked: false}

//     // handleClick = () => {
//     //     this.setState({clicked :!this.state.clicked})
//     // }

//     //for the onclick function

//     // render() {
//     //     return (
//     //         <nav className="NavbarItems">
//     //             <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
//     //             <div className="menu-icon" onClick={this.handleClick}>
//     //                 <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//     //             </div>
                
//     //             <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
//     //                 {MenuItems.map((item, index) => {
//     //                     return (
//     //                         <li key={index}>
//     //                             <a className={item.cName} href={item.url} >
//     //                                 {item.title}
//     //                             </a>
//     //                         </li>
//     //                     )

//     //                 })}

//     //             </ul>
//     //             <Button>Click for a suprise ;D </Button>
//     //         </nav>
//     //     )
//     // }

// }
export default Navbar;
