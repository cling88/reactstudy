import React, { useCallback, useState } from 'react'
import { MdAdd } from 'react-icons/md'


import './TodoInsert.scss';

function TodoInsert({onInsert}) {
    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value)
    }, []);
    const onSubmit = useCallback(
        e => {
            e.preventDefault    ();
            onInsert(value);
            setValue('');
        },
        [onInsert, value]
    )
    return (
        <form className="todoInsert" onSubmit={onSubmit}>
            <input type="text" placeholder="Insert your todo" value={value} onChange={onChange}/>
            <button type="submit"><MdAdd/></button>
        </form>
    )
}

export default TodoInsert
