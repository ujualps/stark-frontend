import * as React from 'react';
import './styles.css';
import {MainHeader} from "../MainHeader";
import {SideBar} from "../SideBar";
import {ProfilePage} from "../ProfilePage"

interface MainpageValues{
    setUser: (id: number) => void
    userId: number;
}

export const MainPage = (props: MainpageValues) => {
    const [activeNav, setActiveNav] = React.useState(0)

    const setContent = () => {
        if(activeNav === 2){
            return(
                <ProfilePage UserId={props.userId}/>
            );
        }
    }

    const setNav = (index:number) => {
        setActiveNav(index)
    }
    return(
       <body className="MainPageMain">
            <MainHeader setUser={props.setUser}/>
            <body className="MainBody">
                <SideBar activeSection={activeNav} setActiveSection={setNav}/>
                {setContent()}
            </body>
        </body> 
    )
    
}