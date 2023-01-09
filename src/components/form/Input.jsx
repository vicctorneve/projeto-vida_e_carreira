import styles from './Input.module.css'

function Input({ type, text, name, placeholder, handleOnChange, value }){
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
         />
      </div>
   )
}

export default Input