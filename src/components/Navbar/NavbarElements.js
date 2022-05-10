import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #112e51;
    background-color: #FFFFFF;

  }
`;



export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #046b99;
  white-space: nowrap;
  padding: 10px 22px;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.3rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ffffff;
    color: #000000;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 15px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;