import PropTypes from 'prop-types';

function ScoreBoard({currentScore,bestScore}){
    return(
        <div className="score-board">
            <h1>Score Board</h1>
            <div>Current Score: {currentScore}</div>
            <div>Best Score: {bestScore}</div>
        </div>
    );
}

ScoreBoard.propTypes ={
    currentScore:PropTypes.number.isRequired,
    bestScore:PropTypes.number.isRequired,
}

export default ScoreBoard;