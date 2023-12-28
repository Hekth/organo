import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';


function App() {
  const [colaboradores, setColaborador] = useState([]);
 
  const times = [
    {
      titulo: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      titulo: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      titulo: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      titulo: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      titulo: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      titulo: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      titulo: 'Inovação & Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ];

  const aoCadastrarNovoColaborador = (colaborador) => {
    setColaborador([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        aoAdicionarColaborador={ (colaborador) => aoCadastrarNovoColaborador(colaborador) } 
        nomesDosTimes={ times.map(({ titulo }) => titulo) } 
      />
      { 
        times.map(({ titulo, corPrimaria, corSecundaria}) => 
          <Time
            colaboradores={ colaboradores.filter((colaborador) => colaborador.time === titulo) }
            titulo={ titulo } 
            corPrimaria={ corPrimaria } 
            corSecundaria={ corSecundaria } 
            key={ titulo }
          />
        )
      }
    </div>
  );
}

export default App;
