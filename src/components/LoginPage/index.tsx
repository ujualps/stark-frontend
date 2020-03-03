import React, { useState } from 'react';
import './styles.css';
import {LoginBox} from '../LoginBox';
import ironman from '../../ironman.jpg';


// import {LoginBox} from './components/LoginBox'
interface user{
    setUser: (id: number) => void;
}

export const LoginPage = (props:user) => {

    const [LoginSignup, setLoginSignup] = useState(0);

    const setLoginSignupState = (loginState:number) =>{
        setLoginSignup(loginState);
    }
    
    return(
        <main className = 'LoginPageMain'>
            <section className = 'LoginPageSection'>
                <img className="LoginPageImage" src = {ironman} alt ="Iron man"/>
            </section>
            <aside className = "LoginPageAside">
                <LoginBox setUser={props.setUser} loginSignup={LoginSignup} setLoginSignup = {setLoginSignupState}/>
            </aside>
        </main>
    );
}