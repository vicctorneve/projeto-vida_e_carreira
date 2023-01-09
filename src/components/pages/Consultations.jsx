import Container from "../layout/Container"
import styles from './Consultations.module.css'
import { useEffect, useState } from "react"
import ConsultationsTable from "../consulta/ConsultationsTable"
import Loading from '../layout/Loading'
import Message from "../layout/Message"
import { Link, useLocation } from "react-router-dom"

function Consultations(){
   const [consultations, setConsultations] = useState([])
   const [removeLoading, setRemoveLoading] = useState(false)
   const [consultationMessage, setConsultationMessage] = useState()

   const location = useLocation()
   let message = ''
   if(location.state){
      message = location.state.message
   }
   
   useEffect(()=>{
      // Para ver o loading
      setTimeout(()=>{
         fetch('http://localhost:5000/consultas',{
            method: 'GET',
            headers:{
               'Content-Type': 'application/json'
            }
         })
         .then(resp => {
            if(resp.ok){
               return resp.json()
            }
            throw resp
         })
         .then(data => {
            setConsultations(data)
            setRemoveLoading(true)
         })
         .catch(err => console.log(err))
         .finally(()=>{
            setRemoveLoading(true)
         })
      },300)
   },[])

   function removeConsultation(id){
      setConsultationMessage('')
      fetch(`http://localhost:5000/consultas/${id}`,{
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
         }
      })
      .then(resp => resp.json())
      .then(() => {
         setConsultations(consultations.filter(consultation => consultation.id !== id))
         setConsultationMessage('Consulta desmarcada com sucesso')
      })
      .catch(err => console.log(err))
   }

   return(
      <section className={styles.consultations_container}>
         <Container>
            {message && <Message type="sucess" msg={message} />}
            {consultationMessage && <Message type="sucess" msg={consultationMessage}/>}
            <div className={styles.container_title}>
               <h1>Consultas</h1>
               <Link className={styles.btn} to="/newconsultation">Agendar Consulta</Link>
            </div>
            {consultations.length > 0 &&
               <table>
                  <thead>
                     <tr>
                        <th>Data</th>
                        <th>Horario</th>
                        <th>Psicólogo</th>
                        <th>Editar</th>
                     </tr>
                  </thead>
                  <tbody>
                     {consultations.map((consultation) =>(
                        <ConsultationsTable
                           id={consultation.id}
                           date={consultation.date}
                           time={consultation.time}
                           psychologistName={consultation.psicologos.name }
                           key={consultation.id}
                           handleRemove={removeConsultation}
                        />
                     ))}
                  </tbody>
               </table>
            }
            {!removeLoading && <Loading/>}
            {removeLoading && consultations.length === 0 && (
               <p>Não há consultas marcadas</p>
            )}
         </Container>
      </section>
   )
}

export default Consultations