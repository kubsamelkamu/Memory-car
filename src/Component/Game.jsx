import { array } from "prop-types";
import { useEffect, useState } from "react";

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
}