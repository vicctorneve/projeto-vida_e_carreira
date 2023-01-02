import styles from './MessageErrors.module.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'

function MessageErrors({text}){
   return (
      <div className={styles.container_msg_error}>
         {text && <AiOutlineCloseCircle/>}
         <p >{text}</p>
      </div>
   )
}

export default MessageErrors