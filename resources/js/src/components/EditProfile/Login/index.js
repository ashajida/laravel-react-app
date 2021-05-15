import React, { Fragment, useState, useEffect } from 'react';
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
import { edit } from '../../../redux/authReducer';
import { FaFileUpload } from 'react-icons/fa';
import axios from 'axios';
import { getPosts } from '../../../redux/postsReducer';


const EditProfile = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        username:'',
    });

    const [authError, setAuthError] = useState({
        error: false,
        message: ''
    });

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const history = useHistory();
    const [ image, setImage ] = useState('');

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    }
    
    const submitCb = () => {
        const { email, password, username } = values;

        const formData = new FormData();
        formData.append('image', image);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('username', username);

        dispatch(edit({
            payload: formData, 
            setAuthError,
            history,
            username: user.username
        }));

        dispatch(getPosts());
    }
    
    const { 
        submit,
        handleChange,
        passwordError,
        emailError,
        usernameError
    } = useForm(values, setValues, submitCb, 'LOGIN');


    useEffect(() => {
        setValues({
            email: user.email,
            password: user.password,
            username: user.username
        })
    }, [])

    return(
        <React.Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <Form onSubmit={ submit } enctype='multipart/form-data'>
                            <Heading>Edit Profile</Heading>
                            { authError.error && <InputMessage>{authError.message}</InputMessage> }
                            <Label for='file'> 
                                <FaFileUpload />
                                Choose Image
                                <FileInput onChange={ handleFileChange } id='file' type='file' name='file' accept='image/*' values={ image } />
                            </Label>
                            <InputWrapper>
                                { emailError.error && <InputMessage>{emailError.message}</InputMessage> }
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

export default EditProfile;