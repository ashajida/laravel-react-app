import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components'
import { Container, Wrapper } from '../extend';


export const Header = styled.header`
    background: #1e1e1e; 
    z-index: 9;
    width: 100%;
`;

export const Nav = styled.nav`
    padding: 0px 15px;
    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    color: #ccc;
    font-size: 2rem;
    font-weight: 100;
    text-transform: uppercase;
    svg {
        margin-right: 10px;
    }
`;

export const ContentWrapper = styled(Wrapper)``;

export const NavBtn = styled.div`
    display: block;
    color: #ccc;
    font-size: 2rem;
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


export const NavContainer = styled(Container)`
    ${Container}
    position: relative;
    padding: 0;
    overflow: ${({click}) => click ? 'hidden' : 'visible'};
`;

export const NavLink = styled(Link)`
    color: #ccc;
    text-decoration: none;
    display: inline-block;
    margin-bottom: 60px;
    padding: 10px 10px;
    font-size: 1.5rem;
    transition: color 0.3s;
    &:hover {
        color: #7158e2;
    }
    ${({ logo }) => logo && 'margin-bottom: 0;'}
    @media screen and (min-width: 768px) {
        margin-bottom: 0;
        font-size: 1.1rem;
    }
`;



export const Links = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    left: ${({ clickEvent }) => clickEvent ? '-100%' : '0'};
    background: #1e1e1e; 
    height: 100vh;
    padding: 0 6px;
    transition: all 0.3s;
    margin-top: 0;
    text-align: center;
    padding-top: 60px;
    align-items: center;
    z-index: 999;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        height: auto;
        position: relative;
        left: 0;
        width: auto;
        text-align: inherit;
        padding: 0;
        position: inherit;
        margin: 0;
    };
`;


export const Icon = styled.div`
    position: relative;
    display: flex;
    svg {
        color: #000;

        font-size: 1.2rem;
    }
`;

export const Quantity = styled.span`
    display: block;
    position: absolute;
    top: -10px;
    right: -10px; 
`;

export const NavItemsWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between
    ${({mobile}) => {
        if(mobile) {
            return `
                display: inline-block;
                height: 40px;
                @media screen and (min-width: 768px) {
                    display: none;
                }
            `;
        }
    }}
`;