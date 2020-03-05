import * as React from 'react';
import './styles.css';
import {UserDetailsBox} from '../UserDetailsBox';
import {PostByUserContainer} from '../PostByUser';
import profileimg from '../../profileimg.jpg'

interface ProfilePageData{
    UserId: number;
}

export const ProfilePage = (props: ProfilePageData) =>{
    return(
        <main className="ProfileMain">
            <div className="ProfilePictureBackground">
                <img src={profileimg} alt="profile Image" className="ProfilePageImage"/>
            </div>
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