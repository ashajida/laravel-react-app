import styled from 'styled-components';
import { Container as FooterContainer, Wrapper as FooterWrapper } from '../extend';
import { Link } from 'react-router-dom';

export const Section = styled.footer`
    background: #f9f9f9;
    color: #000;
    padding: 60px 0;
`;
export const Wrapper = styled(FooterWrapper)``;
export const Container = styled(FooterContainer)``;
export const FooterNav = styled.nav`
    padding: 0;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
        padding: 15px;
        flex-direction: row;
        justify-content: space-between;
    }
`;
export const Links = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
        margin-bottom: 0;
    }
`;
export const FooterLink = styled(Link)`
    margin-bottom: 20px;
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;
    &:hover {
        color: #7158e2;
    }
    
    svg {
        margin-right: 10px;
        font-size: 1.2rem;
    }
`;
export const Heading = styled.h3`
     margin-bottom: 20px;
`;