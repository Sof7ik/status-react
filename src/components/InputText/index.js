import {React} from 'react';
import styles from './styles.module.css';

const InputText = (props) => {
    console.log(props)

 return (
     <div className={`${styles.inputWrapper} ${props.CSSсlasses}`}>
         <label className={styles.inputLabel}>{props.label}</label>

         <input type="text" name={props.inputName} className={styles.input}/>

         <p className={styles.message}>{props.message}</p>
     </div>
 );
}

export default InputText;