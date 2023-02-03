import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div>
    <button className='btn btn-outline-dark mt-3' onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult