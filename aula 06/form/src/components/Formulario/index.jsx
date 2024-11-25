import CampoTexto from '../CampoTexto';
import { useState } from 'react';

const Formulario = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');

    const enviar = (evento) =>{
        evento.preventDefault();
        setNome('');
        setCPF('')
    }

    return (
        <form>
            <CampoTexto label="Nome: " placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)} />

            <CampoTexto label="CPF: " placeholder="Digite seu CPF" valor={cpf} aoAlterado={valor => setCPF(valor)} />

            <button onClick={enviar}>Enviar</button>
        <form/>
    )
}

export default Formulario;