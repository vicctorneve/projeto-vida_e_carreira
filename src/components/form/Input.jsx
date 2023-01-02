import styles from './Input.module.css'

function Input({ type, text, name, placeholder, handleOnChange, value,customClass }){
   return(
      <div className={styles.form_control}>
         <label htmlFor={name}>{text}</label>
         <input 
            id={name} 
            name={name}
            type={type} 
            placeholder={placeholder}
            value={value}
            text={text}
            onChange={handleOnChange}
            customClass={`${styles[customClass]}`}
         />
      </div>
   )
}

export default Input