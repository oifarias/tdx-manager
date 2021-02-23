import React from 'react'

function Accordion({accordion, index, toggleQuestions}) {
    return (
        <div 
            className={"question " + (accordion.open ? 'open' : '')}
            key={index}
            onClick={() => toggleQuestions(index)}
        >
            <div 
                className="question-title" 
                dangerouslySetInnerHTML=
                {{__html: accordion.questionTitle}}
            />

            <div 
                className="question-answer" 
                dangerouslySetInnerHTML=
                {{__html: accordion.answer}}
            />
        </div>
    )
}

export default Accordion