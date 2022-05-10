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

function HeroSection() {
 

  return (
    <HeroContainer>
        <HeroBg>
          {/* <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' /> */}
        </HeroBg>

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
