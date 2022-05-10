import React from 'react';


import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP
  
} from './HeroElements';
// import elements from css file

function HeroSection() {
 

  return (
    <HeroContainer style={{background: "#112e51"}}>
        

        <HeroContent>
          <HeroH1>My Accessible Website</HeroH1>

          <HeroP>
            Robert M. Siegfried, MSIWS*
          </HeroP>
          <HeroP>
            Master of Sciences, Accessible Websites
          </HeroP>

        </HeroContent>

    </HeroContainer>
  );
}

export default HeroSection;
