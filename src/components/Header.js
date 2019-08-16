import React from 'react'

import { wakeServer } from '../js/request'

const Header = () => {
    // sends a request to wake the server on initial page load
    wakeServer()
    return(
        <header>
            <h1><em className="em-grey">Stack Overflow</em> <em className="em-orange">Tag Predictor</em></h1>
            <p>
                This is a companion web application to the <a href="https://github.com/QED0711/stack_overflow_nlp" target="_blank" rel="noopener noreferrer">
                     Stack Overflow NLP Tag Prediction 
                </a> project on github.
                Using Python and sklearn in the backend, we have developed a 
                machine learning model to predict the primary programming language tag for a Stack Overflow post 
                based on the text in the post itself. We limited our search to just the most common languages asked about on Stack Overflow: 
            </p>
            <p>
                <em><strong>Java, C#, JavaScript, Python, and C++</strong></em>
            </p>

            <p>
                To learn more, read our full project report <a href="https://github.com/QED0711/stack_overflow_nlp" target="_blank" rel="noopener noreferrer">here</a>.
            </p>

            <hr/>

            <h3>Instructions:</h3>
            <p>
                You can type or paste any text into the box below. 
                Click <em>Predict Tag</em>, and see which of the five categories the model thinks you are talking about!  
                If you want to test it on real Stack Overflow data, try looking for posts in these five categories <a href="https://stackoverflow.com/questions?tab=Newest" target="_blank" rel="noopener noreferrer">here</a>.
            </p>
        </header>
    )

}

export default Header;