import React, {useState} from 'react';
import Footer from '../components/Footer';
import Halloffame from '../components/Halloffame';
import HalloffameHero from '../components/HalloffameHero';
import Navbar from '../components/Navbar';




const Hall = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container-fluid">
            <Navbar toggle={toggle} />
            <HalloffameHero/>
            <Halloffame/>
            <Footer/>
            
        </div>

    );
}

export default Hall;
