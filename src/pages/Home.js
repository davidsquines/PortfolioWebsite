import React, {useState} from 'react'
import IntroductionSection from '../components/IntroductionSection';
import Navbar from '../components/Navbar/Navbar'
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
            
        </>
    )
}

export default Home
