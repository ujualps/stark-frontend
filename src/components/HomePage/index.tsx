import * as React from 'react';
import './styles.css';
import {PopularQuestionBox} from '../PopularQuestionBox';
import {NewPostBox} from '../NewPostBox';
import {AllPostContainer} from '../AllPostsContainer';

interface HomePageValues{
    userId: number;
}

export const HomePage = (props:HomePageValues) => {
    return(
        <main className="HomePageMain" data-testid='home'>
            <div className="MainPageContents">
                <NewPostBox userId={props.userId}/>
                <AllPostContainer/>
            </div>
            <aside className="MainPageAside">
                <PopularQuestionBox/>
            </aside>
        </main>
    )
}