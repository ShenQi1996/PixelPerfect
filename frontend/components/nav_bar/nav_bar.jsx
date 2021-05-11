import React from "react"
import { Link } from 'react-router-dom';

const NavBar = ({currentUser, logoutUser}) =>{
    const display = currentUser ? (
        <div>
            <h1>welcome {currentUser.username}</h1>
            <button onClick={logoutUser}>LogOut</button>
        </div>
    ) : (
        <div>
            <Link to="/signup">SignUp</Link>
            <Link to="/login">LogIn</Link>
        </div>
    )
    return(
        <header>
            <h1>Logo</h1>
            <div>
                {display}
            </div>
        </header>
    )
}

export default NavBar