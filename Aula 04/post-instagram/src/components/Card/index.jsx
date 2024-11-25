import './Card.css';
import Botao from '../Botao';
import { useState } from 'react';

const Card = (props) => {

    const [curtidas, setCurtidas] = useState(0)

    return (
        <>
            <div className="card">
                <div className="usuario">
                    <h1>{props.usuario}</h1>
                </div>

                <img src={props.imagem} alt={`Imagem do usuário: ${props.usuario}`} />

                <div className="legenda">
                    <Botao definirCurtida = {novaCurtida => {
                        setCurtidas(novaCurtida ? curtidas + 1 : curtidas - 1)
                    }}/>
                    <span>{curtidas}</span>

                    <p>{props.legenda}</p>
                </div>
            </div>
        </>
    )
}

export default Card;