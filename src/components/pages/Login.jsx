import Container from "../layout/Container"
import styles from './Register.module.css'
import LoginForm from "../login/LoginForm"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Login(){

   const [accounts, setAccounts] = useState([])
   const navigate = useNavigate()



   function logged(accounts){
      accounts.logged = true
      
      fetch(`http://localhost:5000/accounts/${accounts.id}`,{
         method: 'PATCH',
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
      .then(data => {
         setAccounts(data)
         navigate('/', {state:{message:"Usuario logado com sucesso"}})
      })
      .catch(err => console.log(err))
   }

   return(
      <section className={styles.register_container}>
         <Container customClass="center">
            <LoginForm
               handleSubmit={logged}
               accountsData={accounts}
            />
            
         </Container>
      </section>
   )
}

export default Login