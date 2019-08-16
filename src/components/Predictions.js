import React from 'react'

import nestedToObject from '../js/nestedToObject';

const Predictions = ({ prediction, proba }) => {
    
    const percentages = nestedToObject(proba)

    return (
        <div>
            <h2 className="section-header">Prediction:</h2>
            <div>
                <div className={`tag prediction-${prediction === 'java'}`}>
                    <h1>Java</h1>
                    <h5>{percentages['java']}</h5>
                </div>

                <div className={`tag prediction-${prediction === 'c#'}`}>
                    <h1>C#</h1>
                    <h5>{percentages['c#']}</h5>
                </div>

                <div className={`tag prediction-${prediction === 'javascript'}`}>
                    <h1>Javascript</h1>
                    <h5>{percentages['javascript']}</h5>
                </div>

                <div className={`tag prediction-${prediction === 'python'}`}>
                    <h1>Python</h1>
                    <h5>{percentages['python']}</h5>
                </div>

                <div className={`tag prediction-${prediction === 'c++'}`}>
                    <h1>C++</h1>
                    <h5>{percentages['c++']}</h5>
                </div>
                
            </div>
        </div>
        )

}

export default Predictions