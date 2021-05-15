import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    padding: 15px;
    width: 100%;
    @media screen and (min-width: 768px) {
        width: 50%;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    &:hover {
        a {
            opacity: 1;
        }
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 380px;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const PostInfo = styled(Link)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: bold;
    opacity: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background: rgba(0,0,0,0.5);
    padding: 15px;
    transition: 0.3s opacity;
`;

export const Icon = styled.div``;

export const Info = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;