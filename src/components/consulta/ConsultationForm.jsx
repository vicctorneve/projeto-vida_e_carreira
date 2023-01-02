import { useEffect, useState } from "react"
import Input from '../form/Input'
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import styles from './ConsultationForm.module.css'

function ConsultaForm({handleSubmit, consultationData, value}){
   const [psicologos, setPsicologos] = useState([])
   const [consultation, setConsulta] = useState(consultationData || {});

   useEffect(()=>{ 
      fetch('http://localhost:5000/psicologos',{
         method:'GET',
         headers:{
            'Content-Type': 'application/json'
         }
      })
      .then(resp => resp.json())
      .then(data =>{
         setPsicologos(data)
      })
      .catch(err => console.log(err))
   }, [])

   function handleChange(e){
      if(e.target.name === "date"){
         setConsulta({ 
            ...consultation, 
            [e.target.name]: convertDate(e.target.value)
         })
         return
      }
      setConsulta({ 
         ...consultation, 
         [e.target.name]: e.target.value 
      })
   }

   function handlePsychologist(e){ 
      setConsulta({
         ...consultation,
         psicologos: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
         },
      })
   }

   function convertDate(date){ 
      let yyyy = date.substring(0,4)
      let mm = date.substring(5,7)
      let dd = date.substring(8,10)
      return `${dd}/${mm}/${yyyy}` 
   }

   const submit = e =>{
      e.preventDefault()
      handleSubmit(consultation)
   }

   return(
      <form onSubmit={submit} className={styles.form}>
         <h1>Agendar consulta</h1>
         <p>Agende aqui sua consulta com algum dos nossos psicologos</p>

         <Input
            id="date" 
            type="date" 
            name="date"
            text="Data:"
            handleOnChange={handleChange}
            required
         />

         <Input
            id="time" 
            type="time" 
            name="time"
            text="Horario:"
            handleOnChange={handleChange}
            required
         />

         <Select
            name="psychologist_id"
            text="Selecione um psicólogo"
            options={psicologos}
            handleOnChange={handlePsychologist}
            value={consultation.psicologos ? consultation.psicologos.id : value}
            required
         />
   
         <SubmitButton
            text="Marcar consulta"
         />
         
      </form>
   )
}

export default ConsultaForm