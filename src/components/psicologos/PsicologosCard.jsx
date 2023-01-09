import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './PsicologosCard.module.css'

function PsicologosCard({name, apresetation, state, id, handleClick}){

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

   const agendar = (e) =>{
      e.preventDefault()
      if(accounts){
         handleClick(id)
         return
      }
      
      alert('Voce precisa efetuar login para agendar consultas')
      navigate('/login')
   }

   return(
      <>
         <div className={styles.card}>
            <div className={styles.container_left}>
               <div className={styles.infos}>
                  <div className={styles.img}></div>
                  <div>
                     <h2>{name}</h2>
                     <p>{state}</p>
                  </div>
               </div>
               <button onClick={agendar} >Agendar</button>
            </div>
            <div className={styles.container_right}>
               <h2>Apresentação</h2>
               <p>{apresetation}</p>
            </div>
         </div>
      </>
   )
}

export default PsicologosCard