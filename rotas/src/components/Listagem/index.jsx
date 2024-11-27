import Titulo from "../Titulo";
import { useState } from "react";
import Botao from "../Botao";
import CardFilme from "../CardFilme";

const Listagem = () => {
    const [filmes, setFilmes] =useState([]);
    const [busca, setBusca] = useState("");
    const [carregamento, setCarregamento] = useState(false);
    const apiKey = "144b0bcc";

    const enviar = (evento) => {
        evento.preventDefault();
        buscarFilmes(busca);
    }

    const buscarFilmes = (filme) => {
        setCarregamento(true);
        fetch(`https://www.omdbapi.com/?s=${filme}&apikey=${apiKey}`)
            .then(response => response.json())
            .then(filmes => {
                if(filmes.Response == "True"){
                    setFilmes(filmes.Search);
                } else{
                    alert('Nenhum filme encontrado!');
                }
            })
            .finally(() => {
                setCarregamento(false);
            })
    }

    return(
        <div>
            <Titulo>Listagem de filmes</Titulo>
            <form onSubmit={enviar}>
                <input type="text" value={busca} onChange={alterado => setBusca(alterado.target.value)}
                placeholder="Digite o nome de um filme"/>

                <Botao tipo="submit">Buscar</Botao>
            </form>

            {carregamento && <p>Carregando...</p>}
            
            <div>
                {filmes.map(filme => (
                    <li><CardFilme poster={filme.Poster} titulo={filme.Title} ano={filme.Year} id={filme.imdbID} detalhes={false}/></li>
                ))}
            </div>
        </div>
    )
}

export default Listagem;