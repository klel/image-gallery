import { useState } from 'react';
import Api from '../Unsplash/Api';

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
    <div>
        <label htmlFor="searchInputId">Search</label>
        <input onChange={onChange} type="text" name="search" id="searchInputId" />
    </div>
    );
}

export default Search;