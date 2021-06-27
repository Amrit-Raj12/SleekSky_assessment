import React from 'react';
import Logo from '../logo.png';
import Timer from '../timer';

const Header = () => {
    return (
        <>
        <div className="header_box">
            <img className="menu_logo" src={Logo}/>
            <div className="timer_box">
            <Timer className="timer" /> 
            </div>
        </div>
        
        </>
    )
}

export default Header
