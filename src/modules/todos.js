// actionTypes  // Ducks 패턴을 사용하는 대신 이름이 중복되지않게 모듈명을 넣어준다.
const CHANGE_INPUT = 'todos/CHANGE_INPUT' 
const INSERT = 'todos/INSERT'
const TOGGLE = 'todos/TOGGLE'
const REMOVE = 'todos/REMOVE'

// actionFunctions
export const changeInput = input => ({type: CHANGE_INPUT, input });
let id = 3; 
export const insert = text => ({
    type: INSERT,
    todo: {
        id: id++,
        text, 
        done: false
    }
 });
export const toggle = id => ({type: TOGGLE, id });
export const remove = id => ({type: REMOVE, id });

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
function todos(state = initialState, action) {
    switch(action.type) {
        case CHANGE_INPUT: 
            return {
                ...state,
                input: action.input
            }
        case INSERT: 
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            }
        case TOGGLE: 
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo )
            }
        case REMOVE: 
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id )
            }
        default:
            return state
    }
}

export default todos;