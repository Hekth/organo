import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';


function App() {
  const [colaboradores, setColaborador] = useState([]);
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      titulo: 'Programação',
      cor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      titulo: 'Front-End',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      titulo: 'Data Science',
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      titulo: 'Devops',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      titulo: 'UX e Design',
      cor: '#FAE9F5'
    },
    {
      id: uuidv4(),
      titulo: 'Mobile',
      cor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      titulo: 'Inovação & Gestão',
      cor: '#FFEEDF'
    }
  ]);

  const aoCadastrarNovoColaborador = (colaborador) => {
    setColaborador([...colaboradores, colaborador]);
  }

  const aoDeletarColaborador = (id) => {
    setColaborador(colaboradores.filter((colaborador) => colaborador.id !== id));
  }

  const mudaCorDoTime = (id, novaCor) => {
    setTimes(times.map((time) => {
      if (time.id === id) {
        time.cor = novaCor;
      }
      
      return time;
    }));
  }

  const cadastraNovoTime = ( novoTime) => {
    setTimes([...times, novoTime]);
  }

  const favorita = (id) => {
    setColaborador(colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito;
      }

      return colaborador;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        aoAdicionarColaborador={ (colaborador) => aoCadastrarNovoColaborador(colaborador) } 
        nomesDosTimes={ times.map(({ titulo }) => titulo) }
        cadastraNovoTime={ cadastraNovoTime }
      />
      { 
        times.map(({ titulo, cor, id}) => 
          <Time
            colaboradores={ colaboradores.filter((colaborador) => colaborador.time === titulo) }
            titulo={ titulo } 
            cor={ cor }
            id={ id }
            key={ id }
            aoDeletar={(id) => aoDeletarColaborador(id)}
            mudaCorDoTime={ (titulo, novaCor) => mudaCorDoTime(titulo, novaCor) }
            favorita={(id) => favorita(id)}
          />
        )
      }
    </div>
  );
}

export default App;
