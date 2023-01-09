import styles from './InputPassword.module.css'
import {BsEyeSlashFill, BsEyeFill} from 'react-icons/bs'
import { useState } from "react"

function InputPassword({handleOnChange,placeholder, id, text}){

   const [visible, setVisible] = useState(true)
   const [type, setType] = useState('password')

   function toggleEye(){
      setVisible(!visible)
      if(visible){
         setType('text')
         return
      }
      setType('password')
   }

   return(
      <>
         <label htmlFor={id}>{text}</label>
         <div className={styles.container_password}>
            <input 
               id={id} 
               type={type} 
               name={id}
               placeholder={placeholder}
               onChange={handleOnChange}
            />
            {visible ? (
               <BsEyeSlashFill onClick={toggleEye}/>
            ): (
               <BsEyeFill onClick={toggleEye}/>
            )}
         </div>

      </>
   )
}

export default InputPassword