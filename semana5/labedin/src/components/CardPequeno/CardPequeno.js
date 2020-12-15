import React from 'react'
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src = {props.imagem} />
            <h4>{props.titulo}</h4>
            <div>
                <p>{props.email}</p>
                <p>{props.endereço}</p>
            </div>
        </div>
    )    
}

export default CardPequeno;