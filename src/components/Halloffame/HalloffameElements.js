import styled from 'styled-components';


export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  color: #;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 2rem;
  line-height: 40px;
  color: #fff;
`;
export const HeadingMain = styled.h1`
    color: secondary;
    font-size: 4rem;
    line-height: 1;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 45px;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 2.5rem;
    }

    @media screen and (max-width: 280px){
        font-size: 30px;
    }

    @media screen and (max-width: 320px){
        font-size: 2rem;
        

    }
`;
