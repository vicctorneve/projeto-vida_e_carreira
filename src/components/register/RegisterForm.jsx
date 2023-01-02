import {BsEyeSlashFill, BsEyeFill} from 'react-icons/bs'
import styles from '../pages/Register.module.css'
import {  useState } from 'react'
import MessageErrors from './MessageErrors'


function RegisterForm({handleSubmit, accountsData}){
   const [visible, setVisible] = useState(true)
   const [type, setType] = useState('password')
   const [accounts, setAccounts] = useState(accountsData || {})


   function toggleEye(){
      setVisible(!visible)
      if(visible){
         setType('text')
         return
      }
      setType('password')
   }

   function handleChange(e){ 
      setAccounts({
         ...accounts,
         [e.target.name]: e.target.value 
      })
   }

   function validateUser(){
      if(accounts.user.length > 5){
         return true
      }
      return false
   }

   function validatePassword(){ 
      if(accounts.password === accounts.passwordConfirm && accounts.password.length >= 6){
         return true
      }
      return false
   }

   function register(){
      const passwordValid = validatePassword()

      const userValid = validateUser()
      if(passwordValid && userValid){
         handleSubmit(accounts)
      }
   }

   const submit = (e) =>{
      e.preventDefault()
      register()
   }

   return(

   <form onSubmit={submit} action="">
               <h2>Register</h2>
               <label htmlFor="name">Nome:</label>
               <input 
                  id="name" 
                  type="text"
                  name="user" 
                  placeholder="Insira seu nome:"
                  onChange={handleChange}
                  
                  
               />
               <label htmlFor="phone">Telefone:</label>
               <input 
                  id="phone" 
                  type="tel" 
                  
                  
               />

               <label htmlFor="date_nasc">Data de nascimento:</label>
               <input 
                  id="date_nasc" 
                  type="date" 
                  
                  
               />

               <label htmlFor="password">Senha:</label>
               <div className={styles.container_password}>
                  <input 
                     id="password" 
                     type={type} 
                     name="password"
                     placeholder="Insira uma senha:" 
                     onChange={handleChange}
                     
                     
                  />
                  {visible ? (
                     <BsEyeSlashFill onClick={toggleEye}/>
                  ): (
                     <BsEyeFill onClick={toggleEye}/>
                  )}
                  
               </div>

               <label htmlFor="confirm_password">Confirmar senha:</label>
               <div className={styles.container_password}>
                  <input 
                     id="confirm_password" 
                     type={type} 
                     placeholder="Insira a senha novamente:" 
                     name="passwordConfirm"
                     onChange={handleChange}
                     
                     
                  />
                  {visible ? (
                     <BsEyeSlashFill onClick={toggleEye}/>
                  ): (
                     <BsEyeFill onClick={toggleEye}/>
                  )}
               </div>
               <button>Cadastrar</button>
            </form>
   )
}

export default RegisterForm