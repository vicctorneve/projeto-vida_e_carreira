import styles from '../pages/Register.module.css'
import Input from '../form/Input'
import InputPassword from "../form/InputPassword"
import MessageErrors from "../register/MessageErrors"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function LoginForm({handleSubmit, accountsData}){
   const [message, setMessage] = useState('')
   const [accounts, setAccounts] = useState()
   const [accountsdb, setAccountsdb] = useState(accountsData || {})

   useEffect(()=>{
      fetch('http://localhost:5000/accounts',{
         method: 'GET',
         headers:{
            'Content-Type': 'application/json'
         }
      })
      .then(resp => resp.json())
      .then(data =>{
         setAccountsdb(data)
      })
      .catch(err => console.log(err))
   },[])

   const handleChange = e => setAccounts({...accounts, [e.target.name]: e.target.value })

   function submit(e){
      e.preventDefault();
      isValidLogin() 
   }

   function isValidLogin(){
      for (let i = 0; i < accountsdb.length; i++) {
         if(accounts.user === accountsdb[i].user && accounts.password === accountsdb[i].password){
            setMessage('')
            handleSubmit(accountsdb[i])
            return true
         }
      }
      setMessage('Usuário ou senha incorreta!')
      return false
   }

   return(
      <>
      <form onSubmit={submit}>
         <h2>Login</h2>
         <MessageErrors
            text={message}
         />
         <Input
            id="name" 
            type="text"
            text="Nome:"
            name="user"
            placeholder="Insira seu nome:"
            handleOnChange={handleChange}
            required
         />

         <InputPassword
            text="Senha:"
            id="password"
            placeholder="Insira sua senha:"
            handleOnChange={handleChange}
            required
         />

         <button>Login</button>
         <p className={styles.login}>
            Nâo possui uma conta ?
            <Link to="/register">
               Registrar
            </Link>
         </p>
      </form>
      </>
   )
}

export default LoginForm