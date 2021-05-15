import styled from 'styled-components';
import { Container as SelfContainer, Wrapper as SelfWrapper } from '../extend';
import { Link } from 'react-router-dom';

export const Section = styled.section``;

export const Wrapper = styled(SelfWrapper)``;

export const Container = styled(SelfContainer)``;

export const ProfileWrapper = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

export const ImageWrapper = styled.div`
    overflow: hidden;
    border-radius: 50%;
    display: block;
    height: 150px;
    width: 150px;
    margin-bottom: 20px;
    position: relative;
    font-size: 5rem;
    text-decoration: none;
    outline: none;
    svg {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media screen and (min-width: 768px) {
        margin-right: 30px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const InfoWrapper = styled.div`
    display: inline;
    width: 100%;
    @media screen and (min-width: 768px) {
        width: 50%;
    }
`;

export const Username = styled.div`
    margin-bottom: 20px;
    font-weight: bold;
    text-align: center;
    @media screen and (min-width: 768px) {
        text-align: initial;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Text = styled.p`
    font-weight: bold;   
`;

export const ProfileLink = styled(Link)`
    font-weight: bold;
    text-decoration: none;
    font-size: 1rem; 
    color: #ccc;  
`;

export const Number = styled.span`
    color: #ae7ee8; 
    font-weight: bold; 
    margin-right: 10px;  
`;

export const Posts = styled.div`
    border-top: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 30px 0;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

export const Button = styled(Link)`
    display: inline-block;
    padding: 5px 10px;
    background: #ae7ee8;
    color: #ccc;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 20px;
    border-radius: 20px;
    margin-right: 20px;
    &:hover {
        background: #996fcc;
    }
`;

export const ButtonsContainer = styled.div`
    text-align: center;
    width: 100%;
    @media screen and (min-width: 768px) {
        text-align: inherit;
    }
`;