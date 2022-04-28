import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ authenticated, user, handleLogOut }) => {
    let authenticatedOptions
    if (user) {
        authenticatedOptions = (
            <nav>
                <h3>Welcome {user.userName}!</h3>
                <Link to="/create-poll"> Create a Poll </Link>
                <Link to={`/profile/${user.id}`}>My Polls</Link>
                <Link onClick={handleLogOut} to="/">
                    Sign Out
                </Link>
            </nav>
        )
    }

    const publicOptions = (
        <nav>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
        </nav>
    )

    return (
        <header>
            <Link to="/">
                <div className="logo-wrapper" alt="logo">
                    <img
                        className="logo"
                        src="https://i.ibb.co/sV23nB5/Daco-5759537.png"
                        alt="ign-white-logo"
                    />
                </div>
            </Link>
            {authenticated && user ? authenticatedOptions : publicOptions}
        </header>
    )
}

export default NavBar