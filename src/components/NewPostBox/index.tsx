import * as React from 'react';
import './styles.css';

interface NewPostBoxValues{
    userId: number;
}


export const NewPostBox = (props: NewPostBoxValues) => {
    return(
        <section className="NewPostMain">
            <input placeholder="Enter Post Title" type="text" className="PostHeading"/>
            <input placeholder="Enter Post Description" type="text" className="PostDescription"/>
            <div className='PostButtonDiv'>
                <button className="PostButton">POST</button>
            </div>
        </section>
    )
}