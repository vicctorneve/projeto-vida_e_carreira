import { Link } from "react-router-dom"
import styles from './NavBar.module.css'

function NavBar({customClass, handleClick}){

   return(
      <>
         <nav className={`${styles.menu} ${styles[customClass]}`}>
            <ul className={`${styles.list}`}>
               <li onClick={handleClick}>
                  <Link to="/">Home</Link>
               </li>
               <li onClick={handleClick}>
                  <Link to="/about">Sobre o projeto</Link>
               </li >
               <li onClick={handleClick}>
                  <Link to="/psychologists">Psicólogos</Link>
               </li>
               <li onClick={handleClick}>
                  <Link to="register">Cadastrar</Link>
               </li>
               <li onClick={handleClick}>
                  <Link to="/login">Entrar</Link>
               </li>
               <li onClick={handleClick}>
                  <Link to="/consultation">Consultas</Link>
               </li>
            </ul>
         </nav>

      </>
   )
}

export default NavBar