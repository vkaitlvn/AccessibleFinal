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
    <HeroContainer style={{background: "#5b616b"}}>
       

        <HeroContent>
          <HeroH1>The Hall of Fame</HeroH1>

          <HeroP>
            Thanks to Brian Seidl and Scott Shannon
          </HeroP>
          

        </HeroContent>

    </HeroContainer>
  );
}

export default HeroSection;
