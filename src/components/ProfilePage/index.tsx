import * as React from 'react';
import './styles.css';
import {UserDetailsBox} from '../UserDetailsBox';
import {PostByUserContainer} from '../PostByUser';

interface ProfilePageData{
    UserId: number;
}

export const ProfilePage = (props: ProfilePageData) =>{
    return(
        <main className="ProfileMain">
            <div className="ProfilePictureBackground"></div>
            <section className="ProfileSection">
                <section className="ActivitySection">
                    <PostByUserContainer userid={props.UserId}/>
                </section>
                <aside className="ProfileAside">
                    <UserDetailsBox UserId={props.UserId}/>
                </aside>
            </section>
        </main>
    )
}