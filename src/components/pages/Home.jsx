import { Link } from 'react-router-dom'
import imgHome from '../../img/home.png'
import Container from '../layout/Container'
import styles from './Home.module.css'

function Home(){
   return(
      <section className={styles.home_container}>
         <Container >
            <div className={styles.container_left}>
               <h1>Psicólogos e terapia</h1>
               <p>Agora você pode ter consultas gratuitas com um psicólogo online com total sigilo e segurança usando a nossa plataforma</p>
               <Link to="/newconsultation">
                  <button> Agendar Consulta</button>

               </Link>
            </div>
            <div className={styles.container_right}>
               <img src={imgHome} alt="imagem home" />
            </div>

         </Container>
      </section>
   )
}

export default Home