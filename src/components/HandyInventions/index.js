import React from 'react';

import {
     
    Heading, 
    Subtitle

} from './HandyInventionsElements'
// importing elements from css file here

import catdrone from "../../images/catdrone.jpg";
import heinzrecipe from "../../images/heinzrecipe.jpg";
import ultimateswiss from "../../images/ultimateswiss.jpg";
// importing images from images folder here



const HandyInventions = ({
    alt,
}) => {
    return (
    
        <div style={{ background: '#000000'}} className="text-white row py-5" id='about'>
            <div className="col-12 px-0">
                <div className="container-lg">
                <div className="col-lg-6 mb-4 mb-md-0"></div>

                    {/* All alt tags are present */}
                    {/* Catdrone section */}
                    <div className="row px-4 justify-content-center align-items-center">

                        <div className="col-lg-6 mb-4 mb-md-0">
                    
                            <Heading>Ninja Cats</Heading>
                            <Subtitle>Conquer the world with the ultimate weapon. Parts needed for weapon: <br/> 
                                        1. Cat (Home grown is OK) <br/>
                                        2. Drone <br/>
                                        3. Duct Tape <br/>
                                        Instructions will come in the mail.
                            </Subtitle>
                            

                        </div>
                        

                        <div className="col-lg-6 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">
                            <img 
                            src={catdrone} 
                            alt={"A cat drone"} 
                            className="h-75 w-75" style={{objectFit:"cover"}}/>
                        </div>
  
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    {/* Heinz Recipe section */}
                    <div className="row px-4 justify-content-center align-items-center">
                        
                        <div className="col-lg-6 mb-4 mb-md-0">

                            <Heading>Check this one out. Checkmate.</Heading>
                            <Subtitle>Never lose track of where you are in a book. Sometimes the easiest solutions are the smartest solutions. Just take some mustard and squirt it onto the page where you just read. (Relish works as well) </Subtitle>
                            

                        </div>
                        

                        <div className="col-lg-6 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">
                            <img 
                            src={heinzrecipe} 
                            alt={"Heinz ketchup smeared on pages of a book"} 
                            className="h-75 w-75" style={{objectFit:"cover"}}/>
                        </div>
    
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    {/* Swiss army knife section */}
                    <div className="row px-4 justify-content-center align-items-center">
                        
                        <div className="col-lg-6 mb-4 mb-md-0">

                            <Heading>The Ultimate Swiss Army Knife by Wenger © </Heading>
                            <Subtitle>
                                For the man who needs a lot of tools and only has one pocket to store them in.
                            </Subtitle>
                            

                        </div>
                        

                        <div className="col-lg-6 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">
                            <img 
                            src={ultimateswiss} 
                            alt={"A swiss army knife with many options"} 
                            className="h-75 w-75" style={{objectFit:"cover"}}/>
                        </div>
  
                    </div>

                </div>
            </div>
        </div>
            
        
    );
};

export default HandyInventions;