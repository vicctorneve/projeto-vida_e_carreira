import Container from './Container'
import styles from './Header.module.css'

import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'


function Header(){
   const [visible, setVisible] = useState(false)
   
   function toggleMenu(){
      setVisible(!visible)
   }
   return(
      <header className={styles.header}>
         <Container>
            <Link to="/">
               <p>Logo</p>
            </Link>
            {visible ? (
               <>
                  <NavBar customClass="menu-mobile" handleClick={toggleMenu}/>
                  <AiOutlineClose onClick={toggleMenu} className={styles.btnMenu}/>
               </>
            ):(
               <>
                  <NavBar customClass=""/>
                  <AiOutlineMenu onClick={toggleMenu} className={styles.btnMenu}/>
               </>
            )}
      </Container>
      </header>
   )
}

export default Header