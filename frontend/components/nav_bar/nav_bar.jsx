import React from "react"
import { Link, NavLink } from 'react-router-dom';
import ProfileDropDowm from "./profile_dropdown"

const NavBar = (props) =>{
    const display = props.currentUser ? (
        <div className="nav_bar_box2">
            <ProfileDropDowm logoutUser={props.logoutUser}  currentUserId={props.currentUser.id}/>
            <NavLink  className="nav_buttom nav_border" to="/upload"><i class="fas fa-arrow-up"></i> Upload</NavLink>
        </div>
    ) : (
        <div className="nav_bar_box3">
            <NavLink activeClassName="active_nav" className="nav_buttom" to="/login">Log In</NavLink>
            <NavLink activeClassName="active_nav" className="nav_buttom" to="/signup">Sign Up</NavLink>
        </div>
    )

    const logoLink = props.currentUser ? (
        <Link className="logo" to="/homefeed">PixelPerfect</Link> 
    ) : (
        <Link className="logo" to="/">PixelPerfect</Link> 
    )
    return(
        <header>
            <div className="nav_bar_container">
                <div className="nav_bar_box1">
                    {logoLink}
                    <div className="nav_box_link">
                        <div>
                            <NavLink className="nav_links" to="/Discover">Discover</NavLink>
                        </div>
                    </div>
                </div>
                <div>
                    {display}
                </div>
            </div>
        </header>
    )
}

export default NavBar