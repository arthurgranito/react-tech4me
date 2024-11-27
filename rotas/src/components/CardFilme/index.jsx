import Botao from "../Botao";
import { Link } from "react-router-dom";

const CardFilme = (props) => {
    if(!props.detalhes){
        return (
            <div>
                <h3>{props.titulo}</h3>
                <img src={props.poster} alt={props.titulo} style={{ width: "100px" }} />
                <p>Ano: {props.ano}</p>
                <Link to={`/detalhes/${props.id}`}>
                    <Botao>Mais Detalhes</Botao>
                </Link>
            </div>
        )
    } else{
        return (
            <div>
                <h3>{props.titulo}</h3>
                <img src={props.poster} alt={props.titulo} style={{ width: "100px" }} />
                <p>Ano: {props.ano}</p>
                <p>Sinopse: {props.sinopse}</p>
            </div>
        )
    }
}

export default CardFilme;