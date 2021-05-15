import React, { Fragment, useState, useEffect } from 'react';
import {
    Section,
    Wrapper,
    Container,
    Users,
} from './elements';
import User from '../User';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Following = () => {

    const param = useParams();
    const [ fufilled, setFufilled ] = useState(false);
    const [ users, setUsers ] = useState({});


    useEffect(() => {
            axios.get(`/api/users/${param.user}`)
            .then(res => {
                setUsers(res.data.relationships.following.data.data)
                setFufilled(true);
            });
            return () => {
                setFufilled(false);
            }
    }, []);

    return(
        <React.Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <Users>
                            {(users.length == 0) && 'No Users found'}
                            {   fufilled &&
                                users.map(user => <User user={user} />)
                            }
                        </Users>
                    </Wrapper>
                </Container>
            </Section>
        </React.Fragment>
    );
}

export default Following;