import React, { useState } from 'react'
import { QuizData } from './QuizData';
import QuizResult from './QuizResult';
function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
        } else {
            setShowResult(true)
        }
    }
    
    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    }
    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
    return (
        <div>
            
            <div className="main container">
            <h2 className='head text-dark text-center'>Quiz App</h2>

                {showResult ? (
                    <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
                ):(
                <>
                <div className="question">
                    <span className='question_num'>{currentQuestion+1}.</span>
                    <span className='questions'>{QuizData[currentQuestion].question}</span>
                </div>
                <div className="option-container">
                   {QuizData[currentQuestion].options.map((option,i)=>{
                 return(
                             <button 
                             // className="option-btn"
                         className={`option-btn ${
                               clickedOption == i+1?"checked":null
                         }`}
                           key={i}
                            onClick={()=>setClickedOption(i+1)}
                         >
                             {option}
                            </button>
                     )
                     })}                
                 </div>
                <input className='px-4 text-center btn btn-outline-secondary ' type="button" value="next" onClick={changeQuestion}/>
                </>
                )}
            </div>
        </div>
    )
}

export default Quiz