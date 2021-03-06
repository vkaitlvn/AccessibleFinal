import React from 'react';

import {
     
    Heading, 
    HeadingMain

} from './MainpageElements'
// importing elements from my css file

// importing images here from the images folder
import bananaphone from "../../images/bananaphone.png";
import car from "../../images/jeep.jpg";
import nyquil from "../../images/nyquil.jpg";



const Mainpage = ({
    alt,
}) => {
    return (
    
        <div style={{ background: '#000000'}} className="text-white row py-5" id='about'>
            <div className="col-12 px-0">
                <div className="container-lg">
                    <div className="row px-4 justify-content-center align-items-center">
                    <HeadingMain>A Few Illustrations</HeadingMain>
                    
                    <br/>
                    <br/>
                    <br/>
                    <br/>


                        {/* All alt tags are present */}
                        <div className="col-lg-6 mb-4 mb-md-0">
                            



                            <Heading >My favorite device</Heading>
                            

                        </div>
                        

                        <div className="col-lg-6 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">
                            <img 
                            src={bananaphone} 
                            alt={"A banana phone"} 
                            className="h-100 w-100" style={{objectFit:"cover"}}/>
                        </div>
                        

                        
                    </div>

                    
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <div className="row px-4 justify-content-center align-items-center">
                        
                        <div className="col-lg-6 mb-4 mb-md-0">

                            <Heading >My dream car</Heading>
                            

                        </div>
                        

                        <div className="col-lg-6 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">
                            <img 
                            src={car} 
                            alt={"A cadillac with a chandelier"} 
                            className="h-100 w-100" style={{objectFit:"cover"}}/>
                        </div>
                        

                        
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <div className="row px-4 justify-content-center align-items-center">
                        
                        <div className="col-lg-6 mb-4 mb-md-0">

                            <Heading >My favorite summer cocktail</Heading>
                            

                        </div>
                        

                        <div className="col-lg-6 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">
                            <img 
                            src={nyquil} 
                            alt={"Bottle of Nyquil"} 
                            className="h-75 w-75" style={{objectFit:"cover"}}/>
                        </div>
                        

                        
                    </div>
                </div>
            </div>
        </div>
            
        
    );
};

export default Mainpage;
