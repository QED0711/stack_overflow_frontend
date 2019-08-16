import React from 'react'

import { wakeServer } from '../js/request'

const Header = () => {
    // sends a request to wake the server on initial page load
    wakeServer()
    return(
        <header>
            <h1><em className="em-grey">Stack Overflow</em> <em className="em-orange">Tag Predictor</em></h1>


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