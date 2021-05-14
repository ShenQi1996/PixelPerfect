import React from "react"
import { Link, NavLink } from 'react-router-dom';

const NavBar = (props) =>{
    const display = props.currentUser ? (
        <div>
            <h1>Welcome User</h1>
            <button onClick={props.logoutUser}>LogOut</button>
        </div>
    ) : (
        <div className="nav_bar_box3">
            <NavLink activeClassName="active_nav" className="nav_buttom" to="/login">Log In</NavLink>
            <NavLink activeClassName="active_nav" className="nav_buttom" to="/signup">Sign Up</NavLink>
        </div>
    )
    return(
        <header>
            <div className="nav_bar_container">
                <div className="nav_bar_box1">
                    <Link className="logo" to="/">PixelPerfect</Link> 
                    <div className="nav_box_link">
                        <div>
                            <NavLink className="nav_links" to="/" >Home</NavLink>
                            <NavLink className="nav_links" to="/pictures">Discover</NavLink>
                        </div>
                    </div>
                </div>
                <div className="nav_bar_box2">
                    {display}
                </div>
            </div>
        </header>
    )
}

export default NavBar