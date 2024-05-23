import Card from '../elements/Card'
import styles from './Projects.module.css'
import lpdnc from '../../src/sections/image/Lpdnc.svg'
import api from '../../src/sections/image/api.svg'
import portifolio from '../../src/sections/image/portifolio.svg'
import arquitetura from '../../src/sections/image/arquitetura.svg'


function Projects()

{
    return (
        <div className={styles.projects}>
            <h1>Projetos</h1>
            <div><Card
                title='LP - DNC'
                description='Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia'
                img={lpdnc}
                site='https://projetolp1dnc.netlify.app/'>
                
                
                </Card>           
            </div>
            <div>
                <Card
                title='Consumo de API'
                description='Projeto de Consumo de API com consulta de cep e clima'
                img={api}
                site='https://segundodesafiodnc.netlify.app'>
                
                
                </Card> 
            </div>
            <div>
                <Card
                title='Portifólio'
                description='Projeto de Portifólio feito com React'
                img={portifolio}
                site='https://portifolio-lemon-eta.vercel.app/'>
                
                
                </Card> 
            </div>
            <div>
                <Card
                title='LP - Arquitetura'
                    description='Projeto de uma Landing Page de arquitetura para DNC'
                img={arquitetura}
                site='https://desafio-landing-arquitetura-dnc.netlify.app'>
                
                
                </Card> 
            </div>
                 
        </div>
    )
}

export default Projects
