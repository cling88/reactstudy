import React from 'react'
import produce from 'immer'

const list = [
    {
        id: 1, 
        todo: 'list 111',
        checked: true
    },
    {
        id: 2, 
        todo: 'list 222',
        checked: true
    },
    {
        id: 3, 
        todo: 'list 333',
        checked: true
    }
]

const add = () => {
    produce(list, draft => {
        const todo = draft.find(t => t.id === 2);
        todo.todo = 'list I am new one!'

        draft.push({
            id: 4,
            todo: 'I am new too',
            checked: false
        })

        draft.splice(draft.findIndex(t => t.id === 1), 1)
    })
}


function ImmerEx() {
    return (
        <div>
            <button onClick={add}>push</button>
            {
                list.map((li, index) => (
                    <li key={index}>{li.todo}</li>
                ))
            }
        </div>
    )
}

export default ImmerEx
