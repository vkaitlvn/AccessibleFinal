import React from 'react'
import { animateScroll as scroll } from 'react-scroll';


import {
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights        
} from './FooterElements';

const toggleHome = () => {
    scroll.scrollToTop()
  }

const Footer = () => {
    return (
        <div className="row " style={{background: "#046b99"}}>
            <FooterWrap>
                
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Siegfried's Accessible Site
                        </SocialLogo>
                        
                        <WebsiteRights>
                            Siegfried © {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>



                        
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </div>
    )
}

export default Footer
