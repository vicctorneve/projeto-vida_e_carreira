import Container from "../layout/Container"
import styles from './Psychologists.module.css'
import { useEffect, useState } from "react"
import PsicologosCard from "../psicologos/PsicologosCard"
import Loading from '../layout/Loading'
import { useNavigate } from "react-router-dom"

function Psychologists(){

   const navigate = useNavigate()

   const [psicologos, setPsicologos] = useState([])
   const [removeLoading, setRemoveLoading] = useState(false)

   function agendarConsulta(id){
      navigate('/newconsultation', {state:{idPsicologo: id}})
   }

   
   useEffect(()=>{
      setTimeout(()=>{
         fetch('http://localhost:5000/psicologos',{
            method:'GET',
            headers:{
               'Content-Type': 'application/json'
            }
         })
         .then(resp => resp.json())
         .then(data => {
            setPsicologos(data)
            setRemoveLoading(true)
         })
         .catch(err => console.log(err))
         .finally(()=> setRemoveLoading(true))
      },300)
   },[])

   return(
      <section className={styles.container_psycholigits}>
         <Container>
            <h1>Nosso psicologos</h1>
            <div className={styles.container_cards}>
               {psicologos.map(psicologo => (

                  <PsicologosCard
                     name={psicologo.name}
                     state={psicologo.state}
                     apresetation={psicologo.apresentation}
                     key={psicologo.id}
                     id={psicologo.id}
                     handleClick={agendarConsulta}

                  />
               ))}

            </div>
            {!removeLoading && <Loading/>}
            {removeLoading && psicologos.length === 0 && (
               <p>Não há psicólogos cadatrados</p>
            )}
         </Container>
      </section>
   )
}

export default Psychologists