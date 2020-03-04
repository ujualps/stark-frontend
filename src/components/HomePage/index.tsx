import * as React from 'react';
import './styles.css';
import {PopularQuestionBox} from '../PopularQuestionBox';
import {NewPostBox} from '../NewPostBox';

interface HomePageValues{
    userId: number;
}

export const HomePage = (props:HomePageValues) => {
    return(
        <main className="HomePageMain">
            <div className="MainPageContents">
                <NewPostBox userId={props.userId}/>
            </div>
            <aside className="MainPageAside">
                <PopularQuestionBox/>
            </aside>
        </main>
    )
}