import styles from './ConsultationsTable.module.css'
import {AiFillDelete} from 'react-icons/ai'

function ConsultationsData({date, time, psychologistName, handleRemove, id
}){

   const remove = (e) => {
      e.preventDefault();
      handleRemove(id)
   }
   
   return (
      <tr>
         <td>{date}</td>
         <td>{time}</td>
         <td>{psychologistName}</td>
         <td className={styles.edit_container}>
            <button onClick={remove} className={styles.delete}>
               Cancelar consulta
               <AiFillDelete/>
            </button>
         </td>
      </tr>
   )
}

export default ConsultationsData