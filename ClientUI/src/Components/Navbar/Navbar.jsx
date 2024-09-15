import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="icon">
                <img src="Svg/Booking.svg" alt="" />
            </div>
            <div className="right">
                <span className="currency">INR</span>
                <div className="country">
                    <img src="Images/IndiaFlag.png" alt="" className="CountryImg"/>   
                </div>
                <div className="help">?</div>
                <div className="List">List Your Property</div>
                <div className="btn">
                    <div className="Register">Register</div>
                    <div className="SignIn">Sign In</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
