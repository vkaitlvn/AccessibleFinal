import React, {useState} from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import MainPage from '../components/Mainpage';

import Navbar from '../components/Navbar';




const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container-fluid">
            <Navbar toggle={toggle} />
            <HeroSection/>
            <MainPage/>

            <Footer/>
            
            

    

        </div>

    );
}

export default Home;
