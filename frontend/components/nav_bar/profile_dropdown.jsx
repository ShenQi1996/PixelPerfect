import React from "react";
import { Link } from "react-router-dom";

const ProfileDropDowm = (props) => {
    const dropDownToggle = () => {
        $('.profile_dropdown').toggleClass('toggle')
    }


    return (
        <div className="profile_container" onClick={dropDownToggle} >
            <div>
                <i className="fas fa-user-circle profile_logo"></i>
            </div>
            <ul className="profile_dropdown">
                <li>
                    <Link className="profile_Link" to={`/profile/${props.currentUserId}`} >Profile</Link>
                </li>
                <li>
                    <Link className="profile_Link" onClick={props.logoutUser} to="/" >Log out</Link>
                </li>
            </ul>
        </div>
    )
}

export default ProfileDropDowm