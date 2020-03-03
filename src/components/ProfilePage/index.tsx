import * as React from 'react';
import './styles.css';

interface ProfilePageData{
    UserId: number;
}

export const ProfilePage = (props: ProfilePageData) =>{
    return(
        <main className="ProfileMain">
            <div className="ProfilePictureBackground"></div>
            <section className="ProfileSection">
                <section className="ActivitySection"></section>
                <aside className="ProfileAside">
                <h1>{props.UserId}</h1>
                </aside>
            </section>
        </main>
    )
}