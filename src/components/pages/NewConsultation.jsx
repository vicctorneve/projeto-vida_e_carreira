import { useNavigate } from "react-router-dom";
import ConsultationForm from "../consulta/ConsultationForm";
import Container from "../layout/Container";
import styles from './NewConsultation.module.css'
import { useLocation } from "react-router-dom";

function NewConsultation(){

   let idPsicologo = ''
   const location = useLocation()

   if(location.state){
      idPsicologo = location.state.idPsicologo
   }

   const navigate = useNavigate();

   function createPost(consultation){
      fetch('http://localhost:5000/consultas',{
         method: 'POST',
         headers:{
            "Content-Type": "application/json",
         },
         body: JSON.stringify(consultation)
      })
      .then(resp => resp.json())
      .then(() => {
         navigate('/consultation', {state:{message: "Consulta marcada com sucesso"}})
      })
      .catch(err => console.log(err))
   }

   return(
      <section className={styles.newConsultation_container}>
         <Container customClass="min-height">
            <ConsultationForm
               handleSubmit={createPost}
               value={idPsicologo}
            />
         </Container>
      </section>
   )
}
export default NewConsultation