import * as React from 'react';
import './styles.css';

export const MainHeader = () => {
    return(
        <header className = 'MainHeaderDiv'>
            <img src = "#" alt= 'LOGO'/>
            <input placeholder="Search..." className = 'MainHeaderSearchInput' type = 'text'/>
            <button className='MainHeaderSearchButton' type="button">Search</button>
            <p className="MainHeaderLoginorSignup"><a className="MainHeaderA">Login</a> or <a className="MainHeaderA">Signup</a></p>
        </header>
    )
}