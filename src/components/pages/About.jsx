import Container from '../layout/Container'
import styles from './About.module.css'

function About(){
   return(
      <section className={styles.about_container}>
         <Container customClass="min-height">
            <h1>Sobre o projeto</h1>
            <div className={styles.container_cards}>
               <div className={styles.card}>
                  <h2>O projeto</h2>
                  <p>Projeto realizado para a UC de Vida&Carreira, com foco na saúde e bem-estar dos profissionais. Nosso principal objetivo, é auxiliar os mesmos que estão propicios a terem Sindrome de Burnout, assim evitando a desencadearem outros tipos de Sindromes, ou até mesmo doenças.</p>
               </div>
               <div className={styles.card}>
                  <h2>Sindrome de Burnout</h2>
                  <p>A síndrome de Burnout também conhecida como Síndrome do Esgotamento Profissional é caracterizada como um distúrbio emocional conhecida popularmente como doença do esgotamento profissional, passou a ser considerada como doença ocupacional em 1o de janeiro deste ano, após a sua inclusão na Classificação Internacional de Doenças (CID) da Organização Mundial da Saúde (OMS).</p>
               </div>
               <div className={styles.card}>
                  <h2>Fundadores do Projeto</h2>
                  <ul>
                     <li>Vicctor Neves</li>
                     <li>Letícia Domingues</li>
                     <li>Lorena Franciele</li>
                     <li>Viniccius Neves</li>
                  </ul>
               </div>
            </div>
         </Container>
      </section>
   )
}

export default About