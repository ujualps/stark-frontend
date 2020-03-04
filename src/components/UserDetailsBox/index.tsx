import * as React from 'react';
import './styles.css';
import axios from 'axios';

interface UserDetails{
    UserId: number;
}

export const UserDetailsBox = (props: UserDetails) => {
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [designation, setDesignation] = React.useState('')
    const [dob, setDob] = React.useState('')
    axios.post('http://localhost:5000/get_user',
    {
        userid: props.UserId
    }).then(function (response) {
        setUsername(response.data.username);
        setEmail(response.data.email);
        setDesignation(response.data.designation);
        setDob(response.data.dob);
    })
    return(
        <div className="UserDetailsBox">
            <div className="left">
                <li className='detailsUsername'>{username}</li>
            </div>
            <div className="left">
                <li className='detailsDesignation'>{designation}</li>
            </div>
            <div className="left">
                <li>{email}</li>
            </div>
            <div className="left">
                <li>DOB :</li><li className='dob'>{dob}</li>
            </div>
            
            
        </div>
    )
}