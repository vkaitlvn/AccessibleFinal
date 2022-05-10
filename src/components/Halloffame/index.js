import React from 'react';

import {
     
    Heading, 
    Subtitle

} from './HalloffameElements'
// importing elements from css file here

import blerdegerb from "../../images/goblin.jpg";
import shrek from "../../images/shrek.jpg";
import jacksparrow from "../../images/jacksparrow.jpg";
// importing images from images folder here


const Mainpage = ({
    alt,
}) => {
    return (
    
        <div style={{ background: '#000000'}} className="text-white row py-5" id='about'>
            <div className="col-12 px-0">
                <div className="container-lg">
                <div className="col-lg-6 mb-4 mb-md-0"></div>

                    {/* All alt tags are present */}
                    {/* Bledegerb section */}
                    <div className="row px-4 justify-content-center align-items-center">

                        <div className="col-lg-6 mb-4 mb-md-0">
                    
                            <Heading>Blerdegerb</Heading>
                            <Subtitle>A local goblin who cannot cease cooking breakfast items at the detriment of the environment. Chickens fear him as he takes their eggs to cook them into more breakfast foods.</Subtitle>
                            

                        </div>
                        

                        <div className="col-lg-6 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">
                            <img 
                            src={blerdegerb} 
                            alt={"Blerdegerb, a local goblin"} 
                            className="h-75 w-75" style={{objectFit:"cover"}}/>
                        </div>
  
                    </div>
                    
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    
                    {/* Shrek section */}
                    <div className="row px-4 justify-content-center align-items-center">
                        
                        <div className="col-lg-6 mb-4 mb-md-0">

                            <Heading>Shrek</Heading>
                            <Subtitle>A layered ogre who lives in wetland property with custom furniture. Likes to relax and make candles in his spare time.</Subtitle>
                            

                        </div>
                        

                        <div className="col-lg-6 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">
                            <img 
                            src={shrek} 
                            alt={"Shrek, A green ogre character from the Shrek franchise"} 
                            className="h-75 w-75" style={{objectFit:"cover"}}/>
                        </div>
    
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    
                    {/* Jack sparrow section */}
                    <div className="row px-4 justify-content-center align-items-center">
                        
                        <div className="col-lg-6 mb-4 mb-md-0">

                            <Heading>Jack Sparrow</Heading>
                            <Subtitle>
                                A humble octopus man who works with his two friends to swindle spare change from children to feed his addiction to hard candy.
                            </Subtitle>
                            

                        </div>
                        

                        <div className="col-lg-6 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">
                            <img 
                            src={jacksparrow} 
                            alt={"Jack Sparrow"} 
                            className="h-75 w-75" style={{objectFit:"cover"}}/>
                        </div>
  
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    

                </div>
            </div>
        </div>
            
        
    );
};

export default Mainpage;
