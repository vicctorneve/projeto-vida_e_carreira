import Container from './Container'
import styles from './Header.module.css'

import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useEffect, useState } from 'react'


function Header(){
   const [visible, setVisible] = useState(false)
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
               // console.log(data[i])
            }
         }
      })
      .catch(err => console.log(err))
   },[])
   
   function toggleMenu(){
      setVisible(!visible)
   }
   return(
      <header className={styles.header}>
         <Container>
            <Link to="/">
               <Link className={styles.logo} to="/">Psicologia e terapia</Link>
            </Link>
            {visible ? (
               <>
                  <NavBar 
                     customClass="menu-mobile" 
                     handleClick={toggleMenu}
                  />
                  <AiOutlineClose 
                     className={styles.btnMenu}
                     onClick={toggleMenu} 
                  />
               </>
            ):(
               <>
                  <NavBar 
                     customClass=""
                  />
                  <AiOutlineMenu onClick={toggleMenu} className={styles.btnMenu}/>
               </>
            )}
      </Container>
      </header>
   )
}

export default Header