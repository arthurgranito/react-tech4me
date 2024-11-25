import { useState } from "react";

const Produto = (props) => {
    const [quantidade, setQuantidade] = useState(0);

    const produto = props.produto;

    const aumentarQuantidade = () => {
        setQuantidade(quantidade => quantidade < produto.quantidadeEstoque ? quantidade + 1 : alert('Quantidade máxima atingida!'));
    }

    const diminuirQuantidade = () => {
        setQuantidade(quantidade => quantidade > 0 ? quantidade - 1 : quantidade = 0);
    }

    return (
        <>
            <div className="card">
                <h2>{produto.nome}</h2>
                <img src={produto.imagem} alt={produto.nome}/>
                <p>Valor: R$ {produto.valor} </p>
                <div className="quantidadeContainer">
                    <button onClick={diminuirQuantidade}>-</button>
                    <span>{quantidade}</span>
                    <button onClick={aumentarQuantidade}>+</button>
                </div>
                <p>Valor Total: R$ { quantidade > 0? quantidade * produto.valor : 0}</p>
            </div>
        </>
    );
}

export default Produto;