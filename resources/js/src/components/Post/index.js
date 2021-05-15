import React, { Fragment, useState } from 'react';
import {
    Wrapper,
    UserInfo,
    Avatar,
    Image,
    Username,
    Caption,
    ImageWrapper,
    PostInfo,
    Icon,
    InfoWrapper,
} from './elements';

import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import Comments from './Comments';
import { FaRegUserCircle } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { getPosts } from '../../redux/postsReducer';


const Post = ({ post, screen }) => {

    const [ postObj, setPostObj ] = useState(post)
    const [showComments, setShowComments] = useState(false);
    const user = useSelector(state => state.auth.user);
    const [ likeCount, setLikeCount ] = useState(postObj.likes_count);
    const [ commentCount, setCommentCount ] = useState(postObj.comments_count);
    const  dispatch = useDispatch();
    const [ isLiked, setIsLiked ] = useState(false);
    const token = localStorage.getItem('access_token');

    const handleShowComments = () => {
        setShowComments(!showComments);
    }

    useEffect(() => {
        return () => {
            setIsLiked(false);
            setPostObj({})
        } 
    }, [])

    const likedByUser = () => {
        let result = false;
        postObj.relationships.likes.data.data.forEach(like => {
            if(like.user.id === user.id) {
                result = true;
            } 
        });
        return result;
    }

    const handleLike = () => {
        if(Object.keys(user).length == 0) {
          return;
        }

        if(likedByUser()) {
            axios.post(`/api/posts/${ postObj.id }/likes/unlike`, {}, {
                headers: {
                    'Authorization': `Bearer ${ token }`
                }
            })
            .then(res => {
                setIsLiked(false);
                setPostObj({...postObj, ...res.data});
                setLikeCount(res.data.likes_count);
                dispatch(getPosts())
            });
            return;
        }

        axios.post(`/api/posts/${ postObj.id }/likes`, {}, {
            headers: {
                'Authorization': `Bearer ${ token }`
            }
        })
        .then(res => {
            setIsLiked(true);
            setPostObj({...postObj, ...res.data});
            setLikeCount(res.data.likes_count);
            dispatch(getPosts())
        });
    }

    return(
        <React.Fragment>
            <Wrapper>
                <UserInfo>
                    <Avatar to={`/${ postObj.relationships.users.data.username }`}>
                        {
                         postObj.relationships.users.data.profile 
                         ?  <Image src={ `${process.env.MIX_CLOUDINARY_URL}/${ postObj.relationships.users.data.profile }` } /> 
                         :  <FaRegUserCircle />
                        }
                    </Avatar>
                    <InfoWrapper>
                        <Username>{ postObj.relationships.users.data.username }</Username>
                        <Caption>{ postObj.title }</Caption>
                    </InfoWrapper>
                </UserInfo>
                <ImageWrapper to={(screen !== 'SINGLE_POST') &&`posts/${postObj.id}`}>
                    <Image src={ `${process.env.MIX_CLOUDINARY_URL}/${postObj.image}`  } />
                </ImageWrapper>
                <PostInfo>
                    <Icon> 
                        { isLiked ? <AiTwotoneLike onClick={ handleLike } /> : <AiOutlineLike onClick={ handleLike } /> }
                        { likeCount }
                    </Icon>
                    <Icon onClick={handleShowComments}>
                        <BiComment />{commentCount}                                        
                    </Icon>
                </PostInfo>
                <Comments 
                    show={showComments} 
                    post={ postObj } 
                    setCommentCount={ setCommentCount } 
                    commentCount={ commentCount }
                />
            </Wrapper>
        </React.Fragment>
    );
}

export default Post;