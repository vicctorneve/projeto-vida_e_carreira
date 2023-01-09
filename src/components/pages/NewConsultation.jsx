import { useNavigate } from "react-router-dom";
import ConsultationForm from "../consulta/ConsultationForm";
import Container from "../layout/Container";
import styles from './NewConsultation.module.css'
import { useLocation } from "react-router-dom";

function NewConsultation(){

   const navigate = useNavigate();
   const location = useLocation()

   let idPsicologo = ''

   if(location.state){
      idPsicologo = location.state.idPsicologo
   }

   function createPost(consultation){
      fetch('http://localhost:5000/consultas',{
         method: 'POST',
         headers:{
            "Content-Type": "application/json",
         },
         body: JSON.stringify(consultation)
      })
      .then(resp => {
         if(resp.ok){
            return resp.json()
         }
         throw resp
      })
      .then((data) => {
         navigate('/consultation', {state:{message: "Consulta marcada com sucesso"}})
      })
      .catch(err => console.log(err))
   }

   // function createPost(consultation){
   //    accounts.consultas.push(consultation)
   //    fetch(`http://localhost:5000/accounts/${accounts.id}`,{
   //       method: 'PATCH',
   //       headers: {
   //          'Content-type': 'application/json'
   //       },
   //       body: JSON.stringify(accounts)
   //    })
   //    .then(resp => resp.json())
   //    .then(data =>{
   //       console.log(data)
   //       // setAccounts(data)
   //       // navigate('/login')
   //    })
   //    .catch(err => console.log(err))
   // }

   
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