import React, { Fragment } from 'react';
import {
    Wrapper,
    ImageWrapper,
    Image,
    PostInfo,
    Icon,
    Container,
    Info
} from './elements';
import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';

const Post = ({ post }) => {
    return(
        <React.Fragment>
            <Container>
                <Wrapper>
                    <ImageWrapper>
                        <Image src={ `${process.env.MIX_CLOUDINARY_URL}/${ post.image }` } />
                    </ImageWrapper>
                    <PostInfo to={ `/posts/${ post.id }` }>
                        <Info>
                            <Icon>
                                <AiOutlineLike /> { post.likes_count }
                            </Icon>
                            <Icon>
                                <BiComment /> { post.comments_count }
                            </Icon>
                        </Info>
                    </PostInfo>
                </Wrapper>
            </Container>
        </React.Fragment>
    );
}

export default Post;