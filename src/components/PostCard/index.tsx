import * as React from 'react';
import './styles.scss';

interface PostCardValues{
    title: string,
    desc: title,
    postedUserId: number,
    postId: number
}

export const PostCard = (props:PostCardValues) => {
    return(
        <section className="PostCardMain">
            <div className="PostCardTitleBox">
                <li className="PostCardTitle">{props.title}</li>
            </div>
            <div className="PostCardDescBox">
                <li className="PostCardDesc">{props.desc}</li>
            </div>
        </section>
    )
}