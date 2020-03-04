import * as React from 'react';
import './styles.css';
import {popularQuestions} from '../../constants/constants';

export const PopularQuestionBox = () => {
    return(
        <div className="PopularQuestionBox">
            <h1 className='PopularQuestionHeading'>Popular Questions</h1>
            {
            popularQuestions.map((question:string, index:number) =>(
                <div className="ButtonBox">
                    <button className="QuestionButton">
                        {question}
                    </button>
                </div> 
            ))}
        </div>
    )
}