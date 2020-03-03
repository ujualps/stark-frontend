import * as React from 'react';
import './styles.css';
import home from '../../home.svg';
import bell from '../../bell.png';
import profile from '../../profile.png'

interface SideBarValues{
    activeSection: number;
    setActiveSection: (index:number) => void;
}

export const SideBar = (props:SideBarValues) => {
    const setImageClass = (i: number)=>{
        if(i === props.activeSection)
            return 'ActiveButton'
        else
            return 'NonActiveButton'
    }
    return(

        <aside className="sideBarBody">
            <img className={setImageClass(0)} src={home} alt='Home' onClick={() => props.setActiveSection(0)}/>
            <img className={setImageClass(1)} src={bell} alt='Notif' onClick={() => props.setActiveSection(1)}/>
            <img className={setImageClass(2)} src={profile} alt='Profile' onClick={() => props.setActiveSection(2)}/>  
        </aside>
    )
}