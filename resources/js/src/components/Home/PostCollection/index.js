import React, { Fragment } from 'react';
import { Container,  Wrapper, Section, PostsCollectionWrapper } from './elements';
import Post from '../../Post';

const PostsCollection = ({ posts }) => {
    
    return(
        <React.Fragment>
            <Section>
                <Container>
                    <Wrapper>
                    <PostsCollectionWrapper>
                        {
                            posts.map(post => <Post post={post} />)
                        }
                    </PostsCollectionWrapper>
                    </Wrapper>
                </Container>
            </Section>
        </React.Fragment>
    );
}

export default PostsCollection;