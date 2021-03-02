import React, { useState } from 'react'


const questions = [
    {
        answer: 'They appear more blue',
        question: 'Which of the following best describes the effect of the Doppler shift on the appearance of stars moving towards Earth?',
        options: ['They appear brighter', 'They appear more red', 'They appear smaller', 'They appear more blue'],
    }
]

const Assessment = () => {
    const [selectedOption, setSelectedOption] = useState('');
    return (
        <div className="tabcontent assessment">
            <h1>Assessment</h1>
            <div className="assessment_content">
                {questions.map((question) => {
                    return <React.Fragment>
                        <h3>{question.question}</h3>
                        <ol className="question_options" type={'a'}>
                            {question.options.map(option => (
                                <li
                                    key={option}
                                    className={selectedOption === option ? 'option selected' : 'option'}
                                    onClick={() => setSelectedOption(option)}
                                >
                                    {option}
                                </li>))}
                        </ol>
                        {selectedOption && <div className="answer_area">
                            <p>{question.answer === selectedOption ? `That's correct` : `Wrong answer, please try again`}</p>
                        </div>}
                    </React.Fragment>
                })}
                </div>
        </div>
    )
}

export default Assessment
