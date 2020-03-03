import * as React from 'react';
import './styles.css';
import {MainHeader} from "../MainHeader";
import {SideBar} from "../SideBar";

interface MainpageValues{
    setUser: (id: number) => void
}

export const MainPage = (props: MainpageValues) => {
    const [activeNav, setActiveNav] = React.useState(0)

    const setNav = (index:number) => {
        setActiveNav(index)
    }
    return(
       <body className="MainPageMain">
            <MainHeader setUser={props.setUser}/>
            <body className="MainBody">
                <SideBar activeSection={activeNav} setActiveSection={setNav}/>
            </body>
        </body> 
    )
    
}