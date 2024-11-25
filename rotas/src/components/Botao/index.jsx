import styled from 'styled-components';

const EstiloBotao = styled.button`
    background-color: blueviolet;
    color: black;
    font-size: 16px;
    padding: 10px;
    border: none;
    cursor: pointer;

    &:hover{
        background-color: black;
        color: white;
    }
`

const Botao = ({children, tipo}) => {
    return <EstiloBotao type={tipo}>{children}</EstiloBotao>
}

export default Botao;