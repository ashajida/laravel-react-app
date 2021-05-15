import {
    Header, 
    Nav, 
    Links, 
    NavLink, 
    NavBtn, 
    Logo, 
    LogoWrapper,
    NavContainer, 
    Icon,
    Quantity,
    NavItemsWrapper,
    ContentWrapper
 } from './NavbarElements';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { AiFillCamera } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';

const Navbar = function() {

    const [ click, setClick ] = useState(true);
    const user = useSelector(state => state.auth.user);

    const handleClick = function() {
        setClick(!click);
    }

    const handleClickMobileBtn = function() {
        if(click === false) {
            setClick(!click);
        }
    }

    return(
        <Header>
             <NavContainer click>
                 <ContentWrapper>
                <Nav>
                    <LogoWrapper>
                        <NavItemsWrapper>
                            <NavLink to='/' onClick={handleClickMobileBtn} logo>
                                <Logo>
                                    <AiFillCamera/>
                                </Logo>
                            </NavLink>
                            <NavBtn onClick={handleClick}>
                                { click ? <FiMenu /> : <FiX />}
                            </NavBtn>
                        </NavItemsWrapper>
                    </LogoWrapper>
                    <Links clickEvent={click}>
                        <NavLink onClick={handleClick} to='/'>Home</NavLink >
                        { (Object.keys(user).length > 0) && <NavLink  onClick={handleClick} to={`/${ user.username }`}>Profile</NavLink > }
                        {
                            (Object.keys(user).length > 0)
                            ?  <NavLink  onClick={handleClick} to='/logout'>Logout</NavLink > 
                            :  <NavLink  onClick={handleClick} to='/login'>Login</NavLink >
                        }

                        { (Object.keys(user).length == 0) && <NavLink  onClick={handleClick} to='/register'>Register</NavLink> }
                    </Links>
                </Nav>
            </ContentWrapper>
            </NavContainer>
        </Header>
    );
}

export default Navbar;