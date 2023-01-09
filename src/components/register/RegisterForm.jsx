import styles from '../pages/Register.module.css'
import {  useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../form/Input'
import InputPassword from '../form/InputPassword'

function RegisterForm({handleSubmit, accountsData}){
   const [accounts, setAccounts] = useState(accountsData || {})

   const handleChange = (e)=> {
      if(e.target.name === "dateBirth"){
         setAccounts({ 
            ...accounts, 
            [e.target.name]: convertDate(e.target.value)
         })
         return
      }
      setAccounts({
         ...accounts,
         [e.target.name]: e.target.value 
      })
   }
      

   function validateUser(){
      if(accounts.user.length > 5) return true
      return false
   }

   function validatePassword(){ 
      if(accounts.password === accounts.confirmPassword && accounts.password.length >= 6) return true
      return false
   }

   function convertDate(date){ 
      let yyyy = date.substring(0,4)
      let mm = date.substring(5,7)
      let dd = date.substring(8,10)
      return `${dd}/${mm}/${yyyy}` 
   }

   function register(){
      const passwordValid = validatePassword()
      const userValid = validateUser()

      if(passwordValid && userValid) handleSubmit(accounts)

   }

   const submit = (e) =>{
      e.preventDefault()
      register()
   }

   return(
      <form onSubmit={submit} action="">
         <h2>Register</h2>
         <Input
            id="name" 
            text="Nome:"
            type="text"
            name="user" 
            placeholder="Insira seu nome:"
            handleOnChange={handleChange}
            required
         />
         <Input
            text="Telefone:"
            id="phone" 
            type="tel" 
            name="telefone"
            placeholder="Insira seu número"
            handleOnChange={handleChange}
            required
         />
         <Input
            text="Data de nascimento:"
            id="date_birth" 
            type="date" 
            name="dateBirth"
            handleOnChange={handleChange}
            required
         />

         <InputPassword
            text="Senha:"
            id="password" 
            placeholder="Insira uma senha:" 
            handleOnChange={handleChange}
            required
         />
         <InputPassword
            id="confirmPassword" 
            text="Confirmar senha:"
            placeholder="Insira a senha novamente:" 
            handleOnChange={handleChange}
            required
         />

         <button>Cadastrar</button>
         
         <p className={styles.login}>
            Já possui uma conta ?
            <Link to="/login">
               Login
            </Link>
         </p>
      </form>
   )
}

export default RegisterForm