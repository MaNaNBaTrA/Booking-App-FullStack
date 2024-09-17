import React, { useContext } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import Icon from "/Svg/Booking.svg"
import { AuthContext } from "../../context/AuthContext"
import FlagIcon from "/Images/IndiaFlag.png"


const Navbar = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="Navbar">
            <Link to="/">
                <div className="icon">
                    <img src={Icon} alt="" />
                </div>
            </Link>
            <div className="right">
                <span className="currency">INR</span>
                <div className="country">
                    <img src={FlagIcon} alt="" className="CountryImg" />
                </div>
                <div className="help">?</div>
                <div className="List">List Your Property</div>
                {user ? <span className='Username'>{user.username}</span> : (<div className="btn">
                    <div className="Register">Register</div>
                    <div className="SignIn">Sign In</div>
                </div>)}
            </div>
        </div>
    )
}

export default Navbar
