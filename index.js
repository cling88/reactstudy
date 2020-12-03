
import { createStore } from 'redux'

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 액션 이름 생성  ( 대문자로작성한다 / 고유해야함 )
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 함수 생성 ( 함수명은 되도록 액션이름을 따르고, 파라미터에 type 으로 생성된 액션이름을 넘긴다. )
const toggleSwitch = () => ({type: TOGGLE_SWITCH});
const increase = difference => ({type: INCREASE, difference});
const decrease = () => ({type: DECREASE});

// 초기값
const initioalState = {
    toggle: false,
    number: 0
}

// Reducer생성
function reducer(state = initioalState, action) {
    switch(action.type) {
        case TOGGLE_SWITCH: 
            return {
                ...state,
                toggle: !state.toggle
            }
        case INCREASE: 
            return {
                ...state,
                number: state.number + action.difference
            }
        case DECREASE: 
            return {
                ...state,
                number: state.number - 1
            }
        default:
            return state;
    }
}

// 스토어 생성
const store = createStore(reducer);

// render Page
const render = () => {
    const state = store.getState();
    if(state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    counter.innerText = state.number;
}
render();

// store 의 state가 변경될때마다 호출되는 리스너를 추가한다. ( 구독하기 / subscribe )
store.subscribe(render);  // subscribe 는 리액트내에서는 리액트가 알아서 처리하기때문에 쓰지는 않는다. 

// 액션 발생시키기 ( dispatch )
divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
}
btnIncrease.onclick = () => {
    store.dispatch(increase(2));
}
btnDecrease.onclick = () => {
    store.dispatch(decrease());
}


