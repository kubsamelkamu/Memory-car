import PropTypes from 'prop-types';


function DisplayCard({id,image,isFlipped,onClick}){
        return(
            <div className={`card $ {isFlipped? 'flipped':''}`}
             onClick={() => onClick(id)}
            >
              {isFlipped?<img src={image} alt="card"/>:'X' }
            </div>
        )
}

DisplayCard.propTypes ={
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    isFlipped: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}



export default DisplayCard;