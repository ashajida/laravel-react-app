import React, { Fragment } from 'react';
import {
    Wrapper,
    Section,
    Container,
    PostInfo
} from './elements';
import Post from '../Post';

const SinglePost = ({ post }) => {
    return(
        <React.Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <PostInfo>
                            <Post post={ post } screen='SINGLE_POST'/>
                        </PostInfo>
                    </Wrapper>
                </Container>
            </Section>
        </React.Fragment>
    );
}

export default SinglePost;