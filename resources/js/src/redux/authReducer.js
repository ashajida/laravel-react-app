import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user:{},
};

export const login = createAsyncThunk(
    'auth/login',
    async (action) => {
        return axios.post('/api/auth/login', action.payload)
        .then(res => {
            if(res.status !== 200) {
                return action.setAuthError({
                    message: 'Please try again',
                    error: true
                })
            }
            localStorage.setItem('access_token', res.data.access_token);
            localStorage.setItem('auth_user', JSON.stringify(res.data.user));
            action.history.push('/');
            return res.data.user;
        })
    }
);

export const register = createAsyncThunk(
    'auth/register',
    async (action) => {
        return axios.post('/api/auth/register', action.payload)
        .then(res => {
            if(res.status !== 200) {
                return action.setAuthError({
                    message: 'Please try again',
                    error: true
                })
            }
            return action.history.push('/login');
        })
    }
);

export const refreshToken = createAsyncThunk(
    'auth/register',
    async (action) => {
        return axios.post('/api/auth/register', action.payload)
        .then(res => {
            if(res.status !== 200) {
                return action.setAuthError({
                    message: 'Please try again',
                    error: true
                })
            }
            return action.history.push('/login');
        })
    }
);

export const verifyToken = createAsyncThunk(
    'auth/veryToken',
    async (action) => {
        return axios.post('/api/auth/verifyToken', {}, {
            headers: {
                'Authorization': `Bearer ${ action.payload }`
            }
        })
        .then(res => {
            if(res.status !== 200) {
                return action.setAuthError({
                    message: 'Please try again',
                    error: true
                })
            }
            return res.data;
        })
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        const token = localStorage.getItem('access_token');
        return axios.post('/api/auth/logout', {}, {
            headers: {
                'Authorization': `Bearer ${ token }`
            }
        })
        .then(res => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('auth_user');
            return res.data;
        })
    }
);


export const edit = createAsyncThunk(
    'auth/edit',
    async (action) => {
        const token = localStorage.getItem('access_token');
        return axios.post(`/api/users/${ action.username }/edit`, action.payload, {
            headers: {
                'Authorization': `Bearer ${ token }`
            }
        })
        .then(res => {
            if(res.status !== 200) {
                return action.setAuthError({
                    message: 'Please try again',
                    error: true
                })
            }
            action.history.push(`/${ res.data.username }`);
            return res.data;
        })
    }
);
  
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [login.fulfilled]: (state, action) => {
          state.user = action.payload;
        },
        [register.fulfilled]: (state, action) => {},
        [logout.fulfilled]: (state) => {
            state.user = {}
        },
        [edit.fulfilled]: (state, {payload}) => {
            state.user = {...state.user, ...payload};
        },
        [verifyToken.fulfilled]: (state, {payload}) => {
            state.user = payload;
        }
    } 
});
  
export default authSlice.reducer;
  