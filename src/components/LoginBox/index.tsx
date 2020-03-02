import * as React from 'react';
import './styles.css';

interface loginPageValues{
    loginSignup:number;
    setLoginSignup: (status:number) => void;
}

export const LoginBox = (props:loginPageValues) => {
    if(props.loginSignup === 0){
        return(
        <section className = "LoginBoxSection">
            <img className = "LoginBoxSectionImg" src = "#" alt = "LOGO"/>
            <input className = "LoginBoxSectionInput" placeholder='Email' type = "text"/>
            <input className = "LoginBoxSectionInput" placeholder='Password' type = "text"/>
            <div className = "RowSpaceBetween">
                <button className= "SigninButton">Sign in</button>
                <p className = "LoginBoxP">or <a onClick={() => props.setLoginSignup(1)} className="LoginBoxA">SignUp</a> instead?</p>
            </div>
        </section>
    );
    }
    else{
        return(
            <section className = "LoginBoxSection">
            <img className = "LoginBoxSectionImg" src = "#" alt = "LOGO"/>
            <input className = "LoginBoxSectionInput" placeholder='Full Name' type = "text"/>
            <input className = "LoginBoxSectionInput" placeholder='Email' type = "text"/>
            <input className = "LoginBoxSectionInput" placeholder='Designation' type = "text"/>
            <input className = "LoginBoxSectionInput" placeholder='Date of Birth' type = "text"/>
            <input className = "LoginBoxSectionInput" placeholder='Password' type = "text"/>
            <input className = "LoginBoxSectionInput" placeholder='Confirm Password' type = "text"/>
            <div className = "RowSpaceBetween">
                <button className= "SigninButton">Sign Up</button>
                <p className = "LoginBoxP">or <a onClick={() => props.setLoginSignup(0)} className="LoginBoxA">Login</a> instead?</p>
            </div>
        </section>
        );
    }
    
}