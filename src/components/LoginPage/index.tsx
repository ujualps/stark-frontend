import * as React from 'react';
import './styles.css';
import {LoginBox} from '../LoginBox';

// import {LoginBox} from './components/LoginBox'

export const LoginPage = () => {
    return(
        <main className = 'LoginPageMain'>
        <section className = 'LoginPageSection'>

        </section>
        <aside className = "LoginPageAside">
            <LoginBox/>
        </aside>
            
        </main>
    );
}