import React, { Fragment, useState } from 'react';
import {
    Section,
    Container,
    Wrapper,
    Heading,
    Form,
    Input,
    Button,
    InputWrapper,
    DemoBtn
} from './elements';
import { InputMessage } from '../../extend';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/authReducer';


const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const [authError, setAuthError] = useState({
        error: false,
        message: ''
    });

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const history = useHistory();

    

    const submitCb = () => {
        const {email, password} = values;

        dispatch(login({
            payload: {
                email,
                password
            }, 
            setAuthError,
            history
        }));
    }
    
    const { 
        submit,
        handleChange,
        passwordError,
        emailError,
    } = useForm(values, setValues, submitCb, 'LOGIN');

    const handleDemoLogin = () => {
        const email = process.env.MIX_DEMO_EMAIL;
        const password = process.env.MIX_DEMO_PWD;

        dispatch(login({
            payload: {
                email,
                password
            }, 
            setAuthError,
            history
        }));
    }

    return(
        <React.Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <Form onSubmit={ submit } >
                            <Heading>Login</Heading>
                            {authError.error && <InputMessage>{authError.message}</InputMessage>}
                            <InputWrapper>
                                {emailError.error && <InputMessage>{emailError.message}</InputMessage>}
                                <Input 
                                    onChange={handleChange} 
                                    type='email'
                                    name='email'
                                    placeholder='Email' 
                                    value={values.email}
                                />
                            </InputWrapper>
                            <InputWrapper>
                                {passwordError.error && <InputMessage>{passwordError.message}</InputMessage>}
                                <Input
                                      onChange={handleChange} 
                                      type='password' 
                                      name='password'
                                      placeholder='Password' 
                                      value={values.password}
                                />
                            </InputWrapper>
                            <Button>Submit</Button>
                            <div>
                            <DemoBtn onClick={ handleDemoLogin }>DEMO LOGIN</DemoBtn>
                            </div>
                        </Form >
                    </Wrapper>
                </Container>
            </Section>
        </React.Fragment>
    );
}

export default Login;