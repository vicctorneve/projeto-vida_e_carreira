import { useEffect, useState } from "react";
import Container from "../layout/Container";
import styles from './Profile.module.css'
import { useNavigate } from "react-router-dom";

function Profile(){

   const navigate = useNavigate()
   const [accounts, setAccounts] = useState([])

   useEffect(()=>{
      fetch('http://localhost:5000/accounts',{
         method: 'GET',
         headers: {
            'Content-type': 'application/json'
         }
      })
      .then(resp => resp.json())
      .then(data =>{
         data.forEach(element => {
            if(element.logged){
               setAccounts(element)
               return
            }
         });
      })
      .catch(err => console.log(err))
   },[])

   function logout(){
      accounts.logged = false
      fetch(`http://localhost:5000/accounts/${accounts.id}`,{
         method: 'PATCH',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(accounts)
      })
      .then(resp => resp.json())
      .then(data =>{
         setAccounts(data)
         navigate('/login')
      })
      .catch(err => console.log(err))
   }

   return(
      <Container customClass="min-height">
         <div className={styles.content}>
         <h1>Meu perfil</h1>
            <p>
               Telefone: 
               {accounts.telefone}
            </p>
            <p>
               Data de nascimento:
               {accounts.dateBirth}
            </p>
            <button onClick={logout} className={styles.btn}>
               Logout
            </button>
         </div>
      </Container>
   )
}

export default Profile