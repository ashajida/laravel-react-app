import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Btn } from '../../extend';

export const Wrapper = styled.div`

`;

export const InputWrapper = styled.div`
    margin-bottom: 20px;
    padding: 5px 15px;
`;
export const TextArea = styled.textarea`
    width: 100%;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 15px;
    outline: none;
    padding: 10px 15px;
    font-family: inherit;
    margin: 0px;
    height: 62px;
    resize: none;
    margin-bottom: 20px;
`;
export const CommentsWrapper =  styled.div`
    max-height: 300px;
    overflow: scroll;
`;

export const Comment = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    padding: 5px 15px;
`;

export const Button = styled(Btn)`
`;

export const Avatar = styled(Link)`
    overflow: hidden;
    border-radius: 50%;
    display: block;
    height: 60px;
    width: 60px;
    margin-right: 30px;
    position: relative;
    font-size: 2.5rem;
    text-decoration: none;
    outline: none;
    svg {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const CommentInfo = styled.div`
    padding: 10px 15px;
    background: #2f2e2e;
    border-radius: 15px;
    width: 90%;
`;
export const Text = styled.div`
    font-size: 0.9rem;
    ${({user}) => {
        if(user) {
            return `
                font-weight: bold;
            `;
        }
    }}
`;