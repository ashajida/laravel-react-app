import { Container as FormContainer, Wrapper as FormWrapper, Btn } from '../../extend';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section``;
export const Container = styled(FormContainer)``;
export const Wrapper = styled(FormWrapper)``;
export const Heading = styled.h2`
    margin-bottom: 20px;
`;
export const Form = styled.form`
    max-width: 600px;
    padding: 40px 20px;
    width: 100%;
    margin: 0 auto;
    background: #1e1e1e;
`;
export const InputWrapper = styled.div`
    margin-bottom: 20px;
`;
export const Input = styled.input`
    display: block;
    width: 100%;
    padding: 15px;
    border: none;
    outline: none;
`;
export const Button = styled(Btn)`
    padding: 15px;
    border: none;
    outline: none;
    font-weight: bold;
    background: #ae7ee8;
    color: #ccc;
    cursor: pointer;
`;

export const DemoBtn = styled(Link)`
    padding: 15px;
    border: none;
    outline: none;
    font-weight: bold;
    background: #ae7ee8;
    color: #ccc;
    cursor: pointer;
    display: inline-block;
    margin-top: 20px;
    text-decoration: none;
    text-align: center;
    font-size: 13.3px;
`;