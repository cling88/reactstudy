import { createAction, handleActions } from 'redux-actions'
import immer from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT' 
const INSERT = 'todos/INSERT'
const TOGGLE = 'todos/TOGGLE'
const REMOVE = 'todos/REMOVE'

// actionFunctions
export const changeInput = createAction(CHANGE_INPUT, input => input)
let id = 3; 
export const insert = createAction(INSERT, text => ({
    id: id++,
    text, 
    done: false
}))
export const toggle = createAction(TOGGLE, id => id)
export const remove = createAction(REMOVE, id => id)

// 초기 상태
const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: "Let's study Redux!",
            done: true
        },
        {
            id: 2,
            text: "Let's study React!",
            done: false
        },
    ]
}

// 리듀서 함수
const todos = handleActions({
    [CHANGE_INPUT]: (state, {payload: input}) => immer( state, draft => {
        draft.input = input
    }),
    // [INSERT]: (state, {payload: todo}) => ({ ...state, todos: state.todos.concat(todo) }),
    [INSERT]: (state, {payload: todo}) => immer(state, draft => {
        draft.todos.push(todo)
    }),
    // [TOGGLE]: (state, {payload: id}) => ({ ...state, todos: state.todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo) }),
    [TOGGLE]: (state, {payload: id}) => immer(state, draft => {
        const todo = draft.todos.find(todo => todo.id === id);
        todo.done = !todo.done
    }),
    // [REMOVE]: (state, {payload: id}) => ({ ...state,  todos: state.todos.filter(todo => todo.id !== id ) })
    [REMOVE]: (state, {payload: id}) => immer(state, draft => {
        const index = draft.todos.findIndex(todo => todo.id === id);
        draft.todos.splice(index, 1)
    })
}, initialState)

export default todos;