import * as React from 'react';
import './styles.css';
import axios from 'axios';

interface NewPostBoxValues{
    userId: number;
}


export const NewPostBox = (props: NewPostBoxValues) => {
    const [enteredTitle, setTitle] = React.useState("");
    const [enteredDesc, setDesc] = React.useState("");
    const [validateTitle, setValidateTitle] = React.useState('')


    const handlePostClick = () =>{
        if(!/[a-zA-z][a-zA-Z0-9 ]{5}[a-zA-Z0-9 ]*/.test(enteredTitle)){
            setValidateTitle('Title needs minimum 6 characters')
            return
        }
        else
            setValidateTitle('')
        axios.post('http://localhost:5000/new_post',
        {
            userid: props.userId,
            title: enteredTitle,
            desc: enteredDesc
        }).then(function (response) {
            setTitle('')
            setDesc('')
        })
    }


    return(
        <section className="NewPostMain">
            <input placeholder="Enter Post Title" value={enteredTitle} type="text" className="PostHeading" onChange={e => setTitle(e.target.value)}/>
            <li className="errorMsg">{validateTitle}</li>
            <textarea placeholder="Enter Post Description" value={enteredDesc} className="PostDescription" onChange={e => setDesc(e.target.value)}/>
            <div className='PostButtonDiv'>
                <button className="PostButton" onClick={() => handlePostClick()}>POST</button>
            </div>
        </section>
    )
}