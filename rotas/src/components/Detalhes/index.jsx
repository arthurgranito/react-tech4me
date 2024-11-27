import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import CardFilme from "../CardFilme";

const Detalhes = () => {
    const {id} = useParams();
    const apiKey = "144b0bcc";
    const [filme, setFilme] = useState({});
    const [carregamento, setCarregamento] = useState(false);

    useEffect( () => {
        buscarDetalhes()
    });


    const buscarDetalhes = () => {
        setCarregamento(true);
        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
            .then(response => response.json())
            .then(filme => {
                setFilme(filme)
            })
            .finally(() => {
                setCarregamento(false);
            })
    }

    return(
        <div>
            {carregamento && <p>Carregando...</p>}
            <CardFilme poster={filme.Poster} titulo={filme.Title} ano={filme.Year} id={filme.imdbID} detalhes={true} sinopse={filme.Plot}/>
        </div>
    )
}

export default Detalhes;