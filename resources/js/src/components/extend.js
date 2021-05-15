import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;
`;

export const Wrapper = styled.div`
    padding: 15px;
`;

export const InputMessage = styled.p`
    margin-bottom: 10px;
    color: #ff0000;
    text-align: start;
`;

export const Btn = styled.button`
    padding: 15px;
    border: none;
    outline: none;
    font-weight: bold;
    background: #ae7ee8;
    color: #ccc;
    cursor: pointer;
`;