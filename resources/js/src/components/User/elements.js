import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    padding: 15px;
    width: 100%;
    @media screen and (min-width: 768px) {
        width: 33.33%;
    }

`;
export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Avatar = styled(Link)`
    overflow: hidden;
    border-radius: 50%;
    display: block;
    height: 60px;
    width: 60px;
    position: relative;
    margin-bottom: 10px;
    font-size: 2.5rem;
    text-decoration: none;
    outline: none;
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
export const Info = styled.div``;
export const Text = styled.div``;