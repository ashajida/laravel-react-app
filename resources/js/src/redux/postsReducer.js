import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = localStorage.getItem('access_token');

const initialState = {
    posts: [],
};
  
export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        return axios.get('/api/posts')
        .then(res => {
            return res.data.data;
        })
    }
);

export const addPosts = createAsyncThunk(
    'posts/addPosts',
    async (action) => {
        return axios.post('/api/posts', action.payload, {
            headers: {
                'Authorization': `Bearer ${ token }`
            }
        })
        .then(res => {
            action.history.push(`/${ action.user.username }`);
            return res.data;
        })
    }
);

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [getPosts.fulfilled]: (state, action) => {
          state.posts = action.payload;
        },
        [addPosts.fulfilled]: (state, { payload }) => {
            state.posts = state.posts.concat(payload);
        }
    } 
});
  
export default postSlice.reducer;
  