import Card from '../Card';
import './Time.css';

const Time = ({ titulo, corPrimaria, corSecundaria, colaboradores }) => {
    return (
        colaboradores.length > 0 && (
            <section className="time" style={{ backgroundColor: corSecundaria }}>
                <h2>
                    { titulo }
                </h2>
                <hr style={{ borderColor: corPrimaria }} />
                <div className='colaboradores'>
                    { colaboradores.map((colaborador, index) => 
                        <Card 
                            colaborador={ colaborador } 
                            key={colaborador.nome + index} 
                            corPrimaria={ corPrimaria } 
                        />
                    )}
                </div>
            </section>
        )
    );
}

export default Time;