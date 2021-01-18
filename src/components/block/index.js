import {React} from 'react';
import styles from './styles.module.css'

const Block = (props) => {
    return (
        <div className={styles.blockWrapper}>
            {props.children}
            {props.line === true ? <hr/> : null}
        </div>
    );
}

export default Block;