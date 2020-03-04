import * as React from 'react';
import './styles.css';
import {PopularQuestionBox} from '../PopularQuestionBox';

export const HomePage = () => {
    return(
        <main className="HomePageMain">
            <div className="MainPageContents">

            </div>
            <aside className="MainPageAside">
                <PopularQuestionBox/>
            </aside>
        </main>
    )
}