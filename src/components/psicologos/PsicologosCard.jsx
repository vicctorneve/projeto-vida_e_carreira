import styles from './PsicologosCard.module.css'

function PsicologosCard({name, apresetation, state, id, handleClick}){

   const agendar = (e) =>{
      e.preventDefault()
      handleClick(id)
   }

   return(
      <>
         <div className={styles.card}>
            <div className={styles.container_left}>
               <div className={styles.infos}>
                  <div className={styles.img}></div>
                  <div>
                     <h2>{name}</h2>
                     <p>{state}</p>
                  </div>
               </div>
               <button onClick={agendar} >Agendar</button>
            </div>
            <div className={styles.container_right}>
               <h2>Apresentação</h2>
               <p>{apresetation}</p>
            </div>
         </div>
      </>
   )
}

export default PsicologosCard