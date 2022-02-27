import { useState } from 'react';
import styles from './Search.module.css';

function Search(props:any) {
    const delay = props.delay ?? 500;
    const [timeoutId, setTimeoutId] = useState(0);

    const onChange = (e:any) => {
        if (timeoutId) { //
           return;
        } else {
            const id:number = window.setTimeout(()=> {
                props.onChange(e);
                setTimeoutId(0);
            }, delay);
           setTimeoutId(id);
        }
    };

    return (
    <div className={styles.wrapper}>
        <label htmlFor="searchInputId">Search</label>
        <input onChange={onChange} type="text" name="search" id="searchInputId" />
        <button className={styles.button} onClick={props.prevHandler}>Prev</button>
        <button className={styles.button} onClick={props.nextHandler}>Next</button>
    </div>
    );
}

export default Search;