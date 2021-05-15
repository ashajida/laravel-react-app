import { Container as FormContainer, Wrapper as FormWrapper } from '../extend';
import styled from 'styled-components';

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

export const Label = styled.label`
    display: block;
    padding: 15px;
    background: #ae7ee8;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 20px;
    cursor: pointer;
    text-align: center;
    @media screen and (min-width: 768px) {
        display: inline-block;
    }

    svg {
        margin-right: 20px;
        font-size: 1.2rem;
    }
`;

export const FileInput = styled.input`
    display: none;
`;

export const Button = styled.button`
    padding: 15px;
    border: none;
    outline: none;
    font-weight: bold;
    background: #ae7ee8;
    font-size: 1rem;
    color: #ccc;
    cursor: pointer;
`;