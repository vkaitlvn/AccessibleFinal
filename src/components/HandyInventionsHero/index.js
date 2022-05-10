import React from 'react';


import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP
  
} from './HeroElements';

function HeroSection() {
 

  return (
    <HeroContainer style={{background: "#205493"}}>
        

        <HeroContent>
          <HeroH1>Some Handy Inventions</HeroH1>

          <HeroP>
            Thanks to Brian Seidl and Scott Shannon
          </HeroP>
          

        </HeroContent>

    </HeroContainer>
  );
}

export default HeroSection;
