import React from 'react';
import Footer from '../components/Footer';
import HandyInventionsHero from '../components/HandyInventionsHero';
import HandyInventions from '../components/HandyInventions';
import Navbar from '../components/Navbar';




const Inventions = () => {
    

    return (
        <div className="container-fluid">
            <Navbar  />
            <HandyInventionsHero/>
            <HandyInventions/>
            <Footer/>
            
            

    

        </div>

    );
}

export default Inventions;
