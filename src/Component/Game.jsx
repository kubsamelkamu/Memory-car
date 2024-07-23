import { useEffect, useState } from "react";
import ScoreBoard from "./Score";
import DisplayCard from "./Card";

async function fetchCard(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=6');
    const data = await response.json();

    return data.resultd.map((pokemon,index) =>({
        id:index,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        isFlipped:false,
    }));
}

const shuffleCard =(card) =>{
    return card.sort(() => Math.random() - 0.5);
}

function GameBoard(){

    const[card,setCard] = useState([]);
    const[flippedCard,setFlippedCard] = useState([]);
    const[matchedCard,setMatchedCard] = useState([]);
    const[currentScore,setCurrentScore] = useState(0);
    const[bestScore,setBestScore] = useState(0);


    useEffect(()=>{
        async function loadCard (){
            const fetchedCards = await fetchCard();
            setCard(shuffleCard([...fetchedCards,...fetchedCards]));
        }

        loadCard();
    },[]);

    const handleCardClick =(id) =>{
        if (flippedCard.length < 2  && flippedCard.includes(id) && !matchedCard.includes(id)) {
            setFlippedCard([...flippedCard,id]);
        }
    };

    useEffect(() =>{
        if (flippedCard.length == 2) {
            const[firstCard,secondCard] = flippedCard;
            if (card[firstCard].image === card[secondCard].image) {
                setMatchedCard([...matchedCard,firstCard,secondCard]);
                setCurrentScore(currentScore + 1);
                if (currentScore + 1 >bestScore) {
                    setBestScore(currentScore + 1);
                }                
            }
            setInterval(() => setFlippedCard([]),1000);
        }
    },[bestScore, card, currentScore, flippedCard, matchedCard],[bestScore])


    return(
        <div>
            <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
            <div className="game-board">
                {card.map((card,index)=>(
                    <DisplayCard
                        key={index}
                        id={index}
                        image={card.image}
                        isFlipped={flippedCard.includes(index) || matchedCard.includes(index)}
                        onClick={handleCardClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default GameBoard;