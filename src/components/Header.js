import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Nav from './Nav'

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
  img{
    height: 80px;
    width: 150px;
  }
`;   
const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img  src='./images/logo-color.svg' alt='logo'/>
        </NavLink>
        <Nav></Nav>
    </MainHeader>
  )
}

export default Header