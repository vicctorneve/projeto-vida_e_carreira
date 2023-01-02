import styles from './ConsultationsTable.module.css'
import {BsFillPencilFill} from 'react-icons/bs'
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
            <button className={styles.edit}>
               Editar
               <BsFillPencilFill/>
               </button>
            <button onClick={remove} className={styles.delete}>
               Excluir
               <AiFillDelete/>
            </button>
         </td>
      </tr>
   )
}

export default ConsultationsData