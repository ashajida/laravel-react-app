import { Fragment, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import NoMatch from './NoMatch';
import { GlobalStyle } from './globalstyles';
import HomePage from './pages/HomePage';
import Post from './pages/Post';
import Navbar from './components/Navbar';
import ProfilePage from './pages/Profile';
import LoginPage from './pages/Login';
import NewPostPage from './pages/NewPostPage';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './redux/postsReducer';
import FollowersPage from './pages/FollowersPage';
import FollowingPage from './pages/Following';
import EditProfilePage from './pages/EditProfilePage';
import RegisterPage from './pages/Register';
import ProtectedRoute from './Routes';
import { verifyToken } from './redux/authReducer';
import Logout from './pages/Logout';


function App() {
  const dispatch = useDispatch();
  const cachedToken = localStorage.getItem('access_token');
  const user = useSelector(state => state.auth.user);

  if(Object.keys(user).length === 0 && cachedToken) {
    dispatch(verifyToken({ payload: cachedToken }));
  }

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <React.Fragment>
         
        <Router>
              <GlobalStyle /> 
              <Navbar />
                  <Switch>
                      <Route exact path='/' component={ HomePage }/>
                      <ProtectedRoute  exact path='/posts/add' component={ NewPostPage }/>
                      <Route exact path='/posts/:id' component={ Post }/>
                      <Route exact path='/login' component={ LoginPage }/>
                      <Route exact path='/logout' component={ Logout }/>
                      <Route exact path='/register' component={ RegisterPage }/>
                      <Route exact path='/:user' component={ ProfilePage }/>
                      <Route exact path='/:user/followers' component={ FollowersPage }/>
                      <Route exact path='/:user/following' component={ FollowingPage }/>
                      <ProtectedRoute exact path='/:user/edit' component={ EditProfilePage }/>
                      <Route component={NoMatch} />
                  </Switch>
          </Router>
         
    </React.Fragment>
  );
}

export default App;
