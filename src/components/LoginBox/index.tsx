import * as React from 'react';
import './styles.css';
import logo from '../../logo.jpg';
import axios from 'axios';

interface loginPageValues{
    loginSignup:number;
    setUser: (id:number) => void;
    setLoginSignup: (status:number) => void;
}

export const LoginBox = (props:loginPageValues) => {
    
    const [susername, setUsername] = React.useState("");
    const [semail, setEmail] = React.useState("");
    const [sdesignation, setDesignation] = React.useState("");
    const [sdob, setDob] = React.useState("");
    const [spassword, setPassword] = React.useState("");

    const handleClick = () => {
        axios.post('http://localhost:5000/users',
        {
            username: susername,
            email: semail,
            designation: sdesignation,
            dob: sdob,
            password: spassword
        }).then(function (response) {
            setUsername('')
            setEmail('')
            setDesignation('')
            setDob('')
            setPassword('')
            props.setLoginSignup(0)
        }).catch(function (error){
            
        })
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:5000/users',
        //     data: {
        //         username: susername,
        //         email: semail,
        //         designation: sdesignation,
        //         dob: sdob,
        //         password: spassword
        //     }
        // });
    }
    

    if(props.loginSignup === 0){
        return(
        <section className = "LoginBoxSection">
            <img className = "LoginBoxSectionImg" src = {logo} alt = "LOGO"/>
            <input className = "LoginBoxSectionInput" placeholder='Email' type = "text"/>
            <input className = "LoginBoxSectionInput" placeholder='Password' type = "text"/>
            <div className = "RowSpaceBetween">
                <button className= "SigninButton" onClick={() => props.setUser(0)}>Login</button>
                <p className = "LoginBoxP">or <a onClick={() => props.setLoginSignup(1)} className="LoginBoxA">SignUp</a> instead?</p>
            </div>
        </section>
    );
    }
    else{
        return(
            <section className = "LoginBoxSection">
            <img className = "LoginBoxSectionImg"  src = {logo} alt = "LOGO"/>
            <input className = "LoginBoxSectionInput" value={susername} placeholder='Full Name' id="username" type = "text" onChange={e => setUsername(e.target.value)}/>
            <input className = "LoginBoxSectionInput" value={semail} placeholder='Email' type = "text" onChange={e => setEmail(e.target.value)}/>
            <input className = "LoginBoxSectionInput" value={sdesignation} placeholder='Designation' type = "text" onChange={e => setDesignation(e.target.value)}/>
            <input className = "LoginBoxSectionInput" value={sdob} placeholder='Date of Birth (DD-MM-YYYY)' type = "text" onChange={e => setDob(e.target.value)}/>
            <input className = "LoginBoxSectionInput" value={spassword} placeholder='Password' type = "text" onChange={e => setPassword(e.target.value)}/>
            {/* <input className = "LoginBoxSectionInput" placeholder='Confirm Password' type = "text"/> */}
            <div className = "RowSpaceBetween">
                <button className= "SigninButton" onClick={() => handleClick()}>Sign Up</button>
                <p className = "LoginBoxP">or <a onClick={() => props.setLoginSignup(0)} className="LoginBoxA">Login</a> instead?</p>
            </div>
        </section>
        );
    }
    
}