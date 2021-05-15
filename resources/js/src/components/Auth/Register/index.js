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
    Label,
    FileInput
} from './elements';
import { InputMessage } from '../../extend';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../redux/authReducer';
import { FaFileUpload } from 'react-icons/fa';


const Register = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        username: ''
    });

    const [ image, setImage ] = useState('');
    const [authError, setAuthError] = useState({
        error: false,
        message: ''
    });

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const history = useHistory();

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    }
    

    const submitCb = () => {
        const {email, password, username} = values;

        const formData = new FormData();
        formData.append('image', image);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('username', username);

        dispatch(register({
            payload: formData, 
            setAuthError,
            history
        }));
    }
    
    const { 
        submit,
        handleChange,
        passwordError,
        emailError,
        usernameError
    } = useForm(values, setValues, submitCb, 'REGISTER');

    return(
        <React.Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <Form onSubmit={ submit } enctype='multipart/form-data'>
                            <Heading>Register</Heading>
                            {authError.error && <InputMessage>{authError.message}</InputMessage>}
                            <Label for='file'> 
                                <FaFileUpload />
                                Choose Image
                                <FileInput onChange={ handleFileChange } id='file' type='file' name='image'  accept='image/*'  values={ image }/>
                            </Label>
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
                                {usernameError.error && <InputMessage>{usernameError.message}</InputMessage>}
                                <Input 
                                    onChange={handleChange} 
                                    type='text'
                                    name='username'
                                    placeholder='Username' 
                                    value={values.username}
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
                        </Form >
                    </Wrapper>
                </Container>
            </Section>
        </React.Fragment>
    );
}

export default Register;