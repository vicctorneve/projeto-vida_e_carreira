import { Link } from "react-router-dom"
import styles from './NavBar.module.css'
import { useEffect, useState } from "react"
import {CgProfile} from 'react-icons/cg'

function NavBar({customClass, handleClick}){

   const [accounts, setAccounts] = useState()

   useEffect(()=>{
      fetch('http://localhost:5000/accounts',{
         method: 'GET',
         headers:{
            'Content-Type': 'application/json'
         }
      })
      .then(resp => resp.json())
      .then(data => {
         for (let i = 0; i < data.length; i++) {
            //checar se tem conta logada
            if(data[i].logged){
               setAccounts(data[i])
            }
         }
      })
      .catch(err => console.log(err))
   },[])

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
               {!accounts && (
                  <>
                     <li onClick={handleClick}>
                        <Link to="register">Cadastrar</Link>
                     </li>
                     <li onClick={handleClick}>
                        <Link to="/login">Entrar</Link>
                     </li>
                  </>
               )}
               {accounts && (
                  <>
                     <li onClick={handleClick}>
                        <Link to="/consultation">Consultas</Link>
                     </li>
                     <li onClick={handleClick} className={styles.profile}>
                        <Link to="/profile">
                           <CgProfile/>
                           {accounts.user}
                        </Link>
                     </li>
                  </>
               )}
            </ul>
         </nav>
      </>
   )
}

export default NavBar