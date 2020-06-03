import React from "react";
import PlayerCard from './PlayerCard'

const PlayerCardContainer = (props) => {
    const arrayOfComponent = props.playerCards.map((singleCard) => {
        return <PlayerCard
            key={singleCard.id}
            singleCard={singleCard}
            deletePlayerCard={props.deletePlayerCard}
        />
    })
    return(
        <div className = "flex">
            {arrayOfComponent}
        </div>
    )
}

export default PlayerCardContainer