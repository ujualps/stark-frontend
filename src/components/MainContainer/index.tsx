import * as React from 'react';
import './styles.css';
import {MainHeader} from "../MainHeader";

interface MainpageValues{
    setUser: (id: number) => void
}

export const MainPage = (props: MainpageValues) => {
    return(
       <body className="MainPageMain">
            <MainHeader setUser={props.setUser}/>
            <body className="MainBody">
            </body>
        </body> 
    )
    
}