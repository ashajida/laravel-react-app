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
    FileInput,
    Label
} from './elements';
import { FaFileUpload } from 'react-icons/fa';
import { addPosts } from '../../redux/postsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { InputMessage } from '../extend';
import { useHistory } from 'react-router-dom';

const NewPost = () => {

    const [ title, setTitle ] = useState('');
    const [ titleError, setTitleError ] = useState({
        message: '',
        error: false
    });
    const [ imageError, setImageError ] = useState({
        message: '',
        error: false
    });
    const [ image, setImage ] = useState('');
    const dispatch = useDispatch();

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    }

    const validateInput = ({ title, image }) => {
        let error = false;

        if(!title) {
            setTitleError({
                message: 'Title must not be empty',
                error: true
            })
            error = true;
        } else {
            setTitleError({
                message: '',
                error: false
            })
        }

        if(!image) {
            setImageError({
                message: 'Image must not be empty',
                error: true
            })
            error = true;
        } else {
            setImageError({
                message: '',
                error: true
            })
        }

        return error;
    }

    const user = useSelector(state => state.auth.user);
    const history = useHistory();
    
    const submit = (e) => {
        e.preventDefault();

        if(validateInput({ title, image })) return;

        const formData = new FormData();
        formData.append('image', image);
        formData.append('title', title);
        dispatch(addPosts({ payload: formData, history, user }))
    }

    return(
        <React.Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <Form onSubmit={ submit } enctype='multipart/form-data'>
                            <Heading>Add Post</Heading>
                            {imageError.error && <InputMessage>{imageError.message}</InputMessage>}
                            <Label for='file'> 
                                <FaFileUpload />
                                Choose a file
                                <FileInput onChange={ handleFileChange } id='file' type='file' name='image' accept='image/*' values={ image } />
                            </Label>
                            <InputWrapper>
                                {titleError.error && <InputMessage>{titleError.message}</InputMessage>}
                                <Input onChange={ handleTitle } type='text' value={ title } />
                            </InputWrapper>
                            <Button>Submit</Button>
                        </Form >
                    </Wrapper>
                </Container>
            </Section>
        </React.Fragment>
    );
}

export default NewPost;