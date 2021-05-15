import { FaRegUserCircle } from 'react-icons/fa';
import {
    Wrapper,
    UserInfo,
    Avatar,
    Info,
    Text,
    Image
} from './elements';
import React from 'react';

const User = ({ user }) => {
    return(
        <Wrapper>
            <UserInfo>
                <Avatar to={`/${ user.username }`}>
                    {
                        user.profile_image
                        ?  <Image src={ `${process.env.MIX_CLOUDINARY_URL}/${ user.profile_image }` } /> 
                        :  <FaRegUserCircle />
                    }
                </Avatar>
                <Info>
                <Text>{ user.username }</Text>
                </Info>
            </UserInfo>
        </Wrapper>
    );
}

export default User;