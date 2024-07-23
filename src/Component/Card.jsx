

function DisplayCard({id,image,isFlipped,onClick}){
        return(
            <div className={`card $ {isFlipped? 'flipped':''}`}
             onClick={() => onClick(id)}
            >
              {isFlipped?<img src={image} alt="card"/>:'X' }
            </div>
        )
}





export default DisplayCard;