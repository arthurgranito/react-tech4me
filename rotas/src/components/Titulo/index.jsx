import styled from "styled-components";

const TituloEstilizado = styled.h1`
    font-size: 1.2rem;
    color: black;
`

const Titulo = ({children}) => {
    return(
        <TituloEstilizado>{children}</TituloEstilizado>
    )
}

export default Titulo;