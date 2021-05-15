import React, { Fragment, useEffect, useState } from 'react';
import {
    Section,
    Wrapper,
    Container,
    Profile as ProfileContent,
    ImageWrapper,
    Image,
    InfoWrapper,
    Username,
    Info,
    Text,
    Posts,
    ProfileWrapper,
    Button,
    Number,
    ProfileLink as Link,
    ButtonsContainer
} from './elements';

import Post from '../ProfilePost';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import axios from 'axios';

const Profile = ({ user, setUser, isFollowed, authUser, setIsFollowed }) => {
    const param = useParams();
    const token = localStorage.getItem('access_token');

    const getAvatar = (user) => {
        if(user.profile_image == null) {
            return <FaRegUserCircle />;
        }
        return <Image src={`${process.env.MIX_CLOUDINARY_URL}/${ user.profile_image }` } />;
    }

    const showPosts = () => {
        return user.relationships.posts.data.data.map(post => <Post key={ post.id } post={ post } /> );
    }

    const handleFollow = (e) => {
        e.preventDefault();
        if(Object.keys(authUser) == 0) return;

        axios.post(`/api/users/${ param.user }/followers`, {}, {
            headers: {
                'Authorization': `Bearer ${ token }`
            }
        })
        .then(res => {
            setIsFollowed(true);
          setUser({ ...user, ['followers_count']: user.followers_count + 1 });
        });
    }

    const handleUnfollow = (e) => {
        e.preventDefault();
        
        if(Object.keys(authUser) == 0) return;

        axios.post(`/api/users/${ param.user }/followers/unfollow`, {}, {
            headers: {
                'Authorization': `Bearer ${ token }`
            }
        })
        .then(res => {
            setIsFollowed(false);
          setUser({ ...user, ['followers_count']: user.followers_count - 1 });
        });
    }

    const showButton = () => {
        if(param.user == authUser.username) return;

        if(isFollowed) {
            return <Button onClick={ handleUnfollow  }>Unfollow</Button>
        }

        return <Button onClick={ handleFollow }>follow</Button>

    }

    return(
        <React.Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <ProfileWrapper>
                        <ProfileContent>
                            <ImageWrapper>
                                { (param.user == authUser.username) ? getAvatar(authUser) : getAvatar(user) }
                            </ImageWrapper>
                            <InfoWrapper>
                                <Username>
                                    { (param.user == authUser.username) ? authUser.username  : param.user}
                                </Username>
                                <ButtonsContainer>
                                    { showButton() }
                                    { (param.user == authUser.username) && <Button to={ `/${ user.username }/edit` }>Update Profile</Button> }
                                    { (param.user == authUser.username) && <Button to='/posts/add' >Add New Post</Button> }
                                </ButtonsContainer>
                                <Info>
                                    <Text>
                                        <Number>{ user.posts_count }</Number>Post
                                    </Text>
                                    <Link to={`/${user.username}/followers`}>
                                   < Number>{ user.followers_count }</Number>Followers
                                    </Link>
                                    <Link to={`/${user.username}/following`}>
                                    <Number>{ user.following_count}</Number>Following
                                    </Link>
                                </Info>
                            </InfoWrapper>
                        </ProfileContent>
                        <Posts>
                            { showPosts() }
                        </Posts>
                        </ProfileWrapper>
                    </Wrapper>
                </Container>
            </Section>
        </React.Fragment>
    );
}

export default Profile;