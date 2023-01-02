import Container from "../layout/Container"
import styles from './Register.module.css'
import RegisterForm from "../register/RegisterForm"
import { useNavigate } from "react-router-dom"

function Register(){

   const navigate = useNavigate()

   function createAccount(accounts){
      fetch('http://localhost:5000/accounts',{
         method: 'POST',
         headers:{
            'Contente-Type': 'application/json'
         },
         body: JSON.stringify(accounts)
      })
      .then(resp => resp.json())
      .then(() => {
         console.log(accounts)
         // navigate('/login', {state:{message: "Conta criada com sucesso"}})
      })
      .catch(err => console.log(err))
   }
   //Não tá subindo as informações da conta pra api

   return(
      <section className={styles.register_container}>
         <Container customClass="center">
            <RegisterForm
               handleSubmit={createAccount}
            />
         </Container>
      </section>
   )
}

export default Register