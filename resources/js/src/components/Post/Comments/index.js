import React, { Fragment, useState } from 'react';
import {
    Wrapper,
    InputWrapper,
    TextArea,
    CommentsWrapper,
    Comment,
    Avatar,
    Image,
    CommentInfo,
    Text,
    Button
} from './elements';

import axios from 'axios';
import { FaRegUserCircle } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../../redux/postsReducer';

const Comments = ({ show, post, setCommentCount, commentCount }) => {

    const [comments, setComments] = useState(post.relationships.comments.data.data);
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const [ comment, setComment ] = useState('');
    
    const handleValue = (e) => {
        setComment(e.target.value)
    }

    const token = localStorage.getItem('access_token');

    const submit = () => {
        if(Object.keys(user).length == 0) return;

        axios.post(`/api/posts/${ post.id }/comments`, {
            body: comment
        }, {
            headers: {
                'Authorization': `Bearer ${ token }`
            }
        })
        .then(res => {
            setComment('');
            setCommentCount(commentCount + 1);
            setComments([...comments, {
                body: comment,
                user
            }])
            dispatch(getPosts());
        });
    }



    if(!show) return(<React.Fragment></React.Fragment>);

    return(
        <React.Fragment>
            <Wrapper>
                <InputWrapper>
                    <TextArea onChange={ handleValue } value={ comment } />
                    <Button onClick={ submit }>Submit</Button>
                </InputWrapper>
                <CommentsWrapper>
                   {
                       comments.map(comment => {
                           return(
                                <Comment>
                                    <Avatar to={`/${ comment.user.username }`}>
                                    {
                                        comment.user.profile_image
                                        ?  <Image src={ `${process.env.MIX_CLOUDINARY_URL}/${ comment.user.profile_image }` } /> 
                                        :  <FaRegUserCircle />
                                    }
                                    </Avatar>
                                    <CommentInfo>
                                        <Text user>{comment.username}</Text>
                                        <Text>{comment.body}</Text>
                                    </CommentInfo>
                                </Comment>
                           );
                       })
                   }
                </CommentsWrapper>
            </Wrapper>
        </React.Fragment>
    );
} 

export default Comments;