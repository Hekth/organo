import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = ({ aoAdicionarColaborador, nomesDosTimes, cadastraNovoTime }) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('Programação');
    const [nomeDoTime, setNomeDoTime] = useState('');
    const [corDoTime, setCorDoTime] = useState('')
    
    const resetaFormulario = () => {
        setNome('');
        setCargo('');
        setImagem('');
        setTime('Programação');
    }

    const aoSalvar = (evento) => {
        evento.preventDefault();
        aoAdicionarColaborador({
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time,
            favorito: false,
        });

        resetaFormulario();
    }

    const cadastraTime = (evento) => {
        evento.preventDefault();
        cadastraNovoTime({ id: uuidv4(), titulo: nomeDoTime, cor: corDoTime });
        setNomeDoTime('');
        setCorDoTime('');
    }

    return (
        <div className='container-formulario'>
            <form onSubmit={ aoSalvar } className="formulario">
                <h2>
                    Preencha os dados para criar o card do colaborador.
                </h2>

                {/* Passando props, é tipo um atributo */}
                <Campo 
                    label="Nome"
                    placeholder="Digite seu nome"
                    obrigatorio
                    valor={ nome }
                    aoAlterar={ (valor) => setNome(valor) }
                />
                <Campo
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    obrigatorio
                    valor={ cargo }
                    aoAlterar={ (valor) => setCargo(valor) }
                />
                <Campo 
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    obrigatorio={ false }
                    valor={ imagem }
                    aoAlterar={ (valor) => setImagem(valor) }
                />
                <ListaSuspensa 
                    label="Time" 
                    nomesDosTimes={ nomesDosTimes }
                    obrigatorio
                    valor={ time }
                    aoAlterar={ (valor) => setTime(valor) }
                />
                {/* PROPS.CHILDREN: permite passar outros valores que não são textos, por exemplo um icone ou uma imagem */}
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={ cadastraTime } className="formulario">
                <h2>
                    Preencha os dados para criar um novo time.
                </h2>
                {/* Passando props, é tipo um atributo */}
                <Campo 
                    label="Nome do time"
                    placeholder="Digite o nome do novo time"
                    obrigatorio
                    valor={ nomeDoTime }
                    aoAlterar={ (valor) => setNomeDoTime(valor) }
                />
                <Campo
                    type='color'
                    label="Cor"
                    placeholder="Digite a cor do time"
                    obrigatorio
                    valor={ corDoTime }
                    aoAlterar={ (valor) => setCorDoTime(valor) }
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </div>
        
        
    );
}

export default Formulario;