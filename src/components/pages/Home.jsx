import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import imgHome from '../../img/home.png'
import Container from '../layout/Container'
import styles from './Home.module.css'

function Home(){
   const navigate = useNavigate()
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

   function agendar(){
      if(accounts){
         navigate('/newconsultation')
         return
      }
      
      alert('Voce precisa efetuar login para agendar consultas')
      navigate('/login')
   }

   return(
      <section className={styles.home_container}>
         <Container >
            <div className={styles.container_left}>
               <h1>Psicólogos e terapia</h1>
               <p>Agora você pode ter consultas gratuitas com um psicólogo online com total sigilo e segurança usando a nossa plataforma</p>
               <button onClick={agendar}> Agendar Consulta</button>
            </div>
            <div className={styles.container_right}>
               <img src={imgHome} alt="imagem home" />
            </div>

         </Container>
      </section>
   )
}

export default Home