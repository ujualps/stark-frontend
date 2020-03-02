import * as React from 'react';
import './styles.css';

export const LoginBox = () => {
    return(
        <section className = "LoginBoxSection">
            <img className = "LoginBoxSectionImg" src = "#" alt = "LOGO"/>
            <input className = "LoginBoxSectionInput" placeholder='Email' type = "text"/>
            <input className = "LoginBoxSectionInput" placeholder='Password' type = "text"/>
            <div className = "RowSpaceBetween">
                <button className= "SigninButton">Sign in</button>
                <p className = "LoginBoxP">or <a className="LoginBoxA">SignUp</a> instead?</p>
            </div>
        </section>
    )
}