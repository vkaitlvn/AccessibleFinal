import React from 'react';

// import Video from '../../video/hero.mp4';

import {
  HeroContainer,
  HeroBg,
//   VideoBg,
  HeroContent,
  HeroH1,
  HeroP
  
} from './HeroElements';
// import elements from css file

function HeroSection() {
 

  return (
    <HeroContainer>
        <HeroBg>
          {/* <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' /> */}
        </HeroBg>

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
