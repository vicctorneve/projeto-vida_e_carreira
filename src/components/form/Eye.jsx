import {BsEyeSlashFill, BsEyeFill} from 'react-icons/bs'
import { useState } from 'react'

function Eye(){

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

   return (
      <>
         {visible ? (
            <BsEyeSlashFill onClick={toggleEye}/>
         ): (
            <BsEyeFill onClick={toggleEye}/>
         )}
      </>
   )
}