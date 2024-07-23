import PropTypes from 'prop-types';

function ScoreBoard({currentScore,bestScore}){
    return(
        <div className="score-board">
            <h1>Score Board</h1>
            <div className='scores'>
                <p>Current Score: {currentScore}</p>
                <p>Best Score: {bestScore}</p>
            </div>
        </div>
    );
}

ScoreBoard.propTypes ={
    currentScore:PropTypes.number.isRequired,
    bestScore:PropTypes.number.isRequired,
}

export default ScoreBoard;