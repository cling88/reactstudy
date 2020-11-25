import React from 'react'
import './TodoList.scss';
//component
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <div className="TodoList">
            {
                todos.map((todo, index) => {
                    return(
                        <TodoListItem
                            todo={todo}
                            key={todo.id}
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />
                    )
                })
            }
        </div>
    )
}

export default TodoList
