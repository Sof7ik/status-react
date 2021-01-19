import React from 'react';
import styles from './style.module.css';

const UpBlock = (props) => {
    const changeStatusHandle = (event) => {
        console.log('Status changed successfully');
    }

    return (
        <>
            <div className={styles.upHeader}>
                    <h2><span className={styles.hello}>Здравствуйте, </span></h2>
                    <div className={styles.nameStatusWrapper}>
                        <div className={styles.nameWrapper}>
                            <h2><span className={styles.personName}>Человек №3596941</span></h2>
                            <button onClick={changeStatusHandle} className={styles.buttonChange}>Сменить статус</button>
                        </div>
                        <div className={styles.status}>Прежде чем действовать, надо понять</div>
                    </div>
            </div>

            {props.children}

        </>
    );
}

export default UpBlock;