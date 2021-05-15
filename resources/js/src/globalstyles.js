import  styled, { createGlobalStyle } from 'styled-components';
import {Link} from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }


    html {
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 25px;
        position: relative;
        height: 100%;
    }

    body {
        // height: 100%;
        background: #121212;
        color: #ccc;
    }

    #root {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

`;

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1140px;
    width: 100%;
    padding: 0 15px;
`;

export const Button = styled(Link)`
    background: #7158e2;
    padding: 10px 15px;
    font-size: 1rem;
    border: 1px solid transparent;
    border-radius: 10px;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        background: #5f4abb;
    }
`;

export const FormButton = styled.button`
    outline: none;
    border: none;
    background: #7158e2;
    padding: 10px 15px;
    font-size: 1rem;
    color: #fff;
    width: 100%;
    display: block;
    border: 1px solid transparent;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background: #5f4abb;
    }
`;

