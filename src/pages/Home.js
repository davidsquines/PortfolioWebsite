import React, {useState} from 'react'
import About from '../components/AboutSection';
import { HomeObj1, HomeObj2, HomeObj3, HomeObj4} from '../components/AboutSection/data';
import Footer from '../components/Footer';
import IntroductionSection from '../components/IntroductionSection';
import Navbar from '../components/Navbar/Navbar'
import Projects from '../components/Projects';
import Sidebar from '../components/Sidebar'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <IntroductionSection/>
            <About{...HomeObj1}/>
            <About{...HomeObj2}/>
            <Projects/>
       
            <About{...HomeObj4}/>
            <Footer/>
            
        </>
    )
}

export default Home
