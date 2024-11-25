import Titulo from "../Titulo";
import { useState } from "react";
import Botao from "../Botao";

const Listagem = () => {
    const [filmes, setFilmes] =useState([]);
    const [busca, setBusca] = useState([]);
    const apiKey = "e8c8fd04";

    const enviar = (evento) => {
        evento.preventDefault();
        buscarFilmes(busca);
    }

    return(
        <div>
            <Titulo>Listagem de filmes</Titulo>
            <form onSubmit={enviar}>
                <input type="text" value={busca} onChange={alterado => setBusca(alterado.target.value)}
                placeholder="Digite o nome de um filme"/>

                <Botao tipo="submit">Buscar</Botao>
            </form>
            <ul>
                {filmes.map(filme => (<li>{filme}</li>))}
            </ul>
        </div>
    )
}

export default Listagem;