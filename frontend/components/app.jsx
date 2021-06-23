import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import PictureIndexContainer from "./pictures/picture_index_container";
import UploadPageContainer from './pictures/upload_picture_container';
import PictureShowContainer from "./pictures/picture_show_container";
import HomeFeed from "./home_feel/home_feel_container";
import ProfileContainer from "./profile/profile_container"
import Home from './home/home';
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import UserContainer from "./profile/user_container"

const App = () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        <Route exact path="/Discover" component={PictureIndexContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/upload" component={UploadPageContainer} />
        <Route exact path="/pictures/:pictureId" component={PictureShowContainer} />
        <ProtectedRoute exact path="/homefeed" component={HomeFeed} />
        <ProtectedRoute path="/profile/:userId" component={ProfileContainer} />
        <ProtectedRoute path="/users/:userId" component={UserContainer} />
    </div>
)

export default App