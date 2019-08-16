import React from 'react'

const Footer = () => {

    return (
        <footer>
            <hr/>
            <h2>About:</h2>
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

            <p>
                The source code for this web app can be found <a href="https://github.com/QED0711/stack_overflow_frontend" target="_blank" rel="noopener noreferrer">here</a>.
            </p>
            <hr />
            <h3>Project Authors:</h3>
            <p><a href="https://github.com/QED0711" target="_blank" rel="noopener noreferrer">Quinn Dizon</a> | <a href="https://github.com/mzhou356" target="_blank" rel="noopener noreferrer">Mindy Zhou</a></p>
        </footer>
    )

}

export default Footer