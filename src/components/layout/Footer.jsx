import styles from './Footer.module.css'
import Container from './Container'

function Footer(){
   return(
      <footer className={styles.footer}>
         <Container customClass="center">
         </Container>
      </footer>
   )
}

export default Footer