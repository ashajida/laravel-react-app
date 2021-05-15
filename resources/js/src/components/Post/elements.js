import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    margin-bottom: 40px;
    background: #1e1e1e;
    display: inline-block;
    width: 100%;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    padding: 15px;
`;

export const Avatar = styled(Link)`
    overflow: hidden;
    border-radius: 50%;
    display: block;
    height: 40px;
    width: 40px;
    margin-right: 20px;
    position: relative;
    font-size: 2.5rem;
    text-decoration: none;
    outline: none;
    @media screen and (min-width: 768px) {
        height: 40px;
        width: 40px;
    }
    svg {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;
export const Username = styled.div`
    font-size: 0.8rem;
    font-weight: bold;
    @media screen and (min-width: 768px) {
        font-size: 1.3rem;
    }
`;
export const Caption = styled.div`
    font-size: 0.8rem;
    font-weight: bold;
    @media screen and (min-width: 768px) {
        font-size: 1rem;
    }
`;

export const ImageWrapper = styled(Link)`
    text-decoration: none;
    display: block;
    margin-bottom: 0px;
    height: 380px;
`;
export const PostInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    margin-bottom: 20px;
    padding: 15px;
`;
export const Icon = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #ae7ee8;

    &:first-of-type {
        margin-right: 20px;
    }

    svg {
        margin-right: 10px;
        font-size: 1.5rem;
        color: #ccc
    }
`;