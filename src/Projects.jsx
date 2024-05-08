import './Projects.css'
import Pcard from './Pcard'
import landingDNC from './images/landingDNC.png'
import dncweather from './images/Dncweather.png'
import portfolio from './images/portfolio.png'

function Projects(){
    return(
        <div className='projects' id="pjtcts">
            <h1>Projetos</h1>
            <section>
                <Pcard
                img={landingDNC}
                title="Landing page DNC"
                descr="Projeto front-end de uma landing page aplicando HTML, diferentes estilizações de CSS e funcionalidades JavaScript."
                site="https://landing-test-dnc-155cbe.netlify.app"
                />
                <hr className="pcard-divider" />
                <Pcard
                img={dncweather}
                descr="Projeto com consumo de APIs para consulta de cep e metereologia. Front-end desenvolvido com HTML e CSS puro. Consumo de api com JavaScript"
                title="DncWeather"
                site="https://dncweatherapi.netlify.app"
                />
                <hr className="pcard-divider" />
                <Pcard
                img={portfolio}
                title="Meu portfólio"
                descr="Meu primeiro portfólio construído com React.js, utilizando também bibliotecas como
                Bootstrap e React Icons."
                site="https://meu-portifolio-three-phi.vercel.app"/>
                <hr className="pcard-divider" />
                
                
                
            </section>
        </div>
    )
}

export default Projects