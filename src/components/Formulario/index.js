import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = ({ aoAdicionarColaborador, nomesDosTimes }) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('Programação');

    

    const resetaFormulario = () => {
        setNome('');
        setCargo('');
        setImagem('');
        setTime('Programação');
    }

    const aoSalvar = (evento) => {
        evento.preventDefault();
        aoAdicionarColaborador({
            nome,
            cargo,
            imagem,
            time
        });

        resetaFormulario();
    }

    return (
        <form onSubmit={ aoSalvar } className="formulario">
            <h2>
                Preencha os dados para criar o card do colaborador.
            </h2>

            {/* Passando props, é tipo um atributo */}
            <CampoTexto 
                label="Nome"
                placeholder="Digite seu nome"
                obrigatorio={ true }
                valor={ nome }
                aoAlterar={ (valor) => setNome(valor) }
            />
            <CampoTexto
                label="Cargo"
                placeholder="Digite seu cargo"
                obrigatorio={ true }
                valor={ cargo }
                aoAlterar={ (valor) => setCargo(valor) }
            />
            <CampoTexto 
                label="Imagem"
                placeholder="Informe o endereço da imagem"
                obrigatorio={ false }
                valor={ imagem }
                aoAlterar={ (valor) => setImagem(valor) }
            />
            <ListaSuspensa 
                label="Time" 
                nomesDosTimes={ nomesDosTimes }
                obrigatorio={ true }
                valor={ time }
                aoAlterar={ (valor) => setTime(valor) }
            />
            {/* PROPS.CHILDREN: permite passar outros valores que não são textos, por exemplo um icone ou uma imagem */}
            <Botao>
                Criar Card
            </Botao>
        </form>
    );
}

export default Formulario;