
function ScoreBoard({currentScore,bestScore}){
    return(
        <div className="score-board">
            <div>Current Score: {currentScore}</div>
            <div>Best Score: {bestScore}</div>
        </div>
    );
}



export default ScoreBoard;