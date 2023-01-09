import Container from "../layout/Container"
import styles from './Register.module.css'
import RegisterForm from "../register/RegisterForm"
import { useNavigate } from "react-router-dom"

function Register(){

   const navigate = useNavigate()

   function createAccount(accounts){
      accounts.logged = false
      delete accounts.confirmPassword

      fetch('http://localhost:5000/accounts',{
         method: 'POST',
         headers:{
            "Content-Type": "application/json",
         },
         body: JSON.stringify(accounts)
      })
      .then(resp => {
         if(resp.ok){
            return resp.json()
         }
         throw resp
      })
      .then(() => {
         navigate('/login', {state:{message: "Conta criada com sucesso"}})
      })
      .catch(err => console.log(err))
   }

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