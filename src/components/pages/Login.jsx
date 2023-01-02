import Container from "../layout/Container"
import styles from './Register.module.css'
import {BsEyeSlashFill, BsEyeFill} from 'react-icons/bs'
import { useEffect, useState } from "react"
import Input from '../form/Input'
import { useNavigate } from "react-router-dom"
import MessageErrors from "../register/MessageErrors"

function Login({accountsData}){
   
   const [message, setMessage] = useState('')
   const [visible, setVisible] = useState(true)
   const [type, setType] = useState('password')
   const [accounts, setAccounts] = useState([])
   const [accountsdb, setAccountsdb] = useState([])
   const navigate = useNavigate()

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
   

   function submit(e){
      e.preventDefault();
      if(login()){
         navigate('/')
      }
      
   }

   function login(){
      for (let i = 0; i < accountsdb.length; i++) {
         if(accounts.user === accountsdb[i].user && accounts.password === accountsdb[i].password){
            setMessage('')
            return true
         }
      }
      setMessage('Usuário ou senha incorreta!')
      return false
   }

   return(
      <section className={styles.register_container}>
         <Container customClass="center">
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

               <button>Login</button>
               
            </form>
         </Container>
      </section>
   )
}

export default Login