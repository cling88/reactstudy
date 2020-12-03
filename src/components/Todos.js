import React from 'react'

const TodoItem = ({ todos, onToggle, onRemove }) => {
    return (
        <div>
            <input type="checkbox"/>
            <span>예제 텍스트</span>
            <button>del</button>
        </div>
    )
}

const Todos = ({
    input, 
    todos, 
    onChangeInput,
    onInsert,
    onToggle,
    onRemove
}) => {
    const onSubmit = e => {
        e.preventDefautl();
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text"/>
                <button type="submit">Submit</button>
            </form>
            <div>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>
        </div>
    )
}



export default Todos
