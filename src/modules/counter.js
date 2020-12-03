
// actionTypes  // Ducks 패턴을 사용하는 대신 이름이 중복되지않게 모듈명을 넣어준다.
const INCREASE = 'counter/INCREASE' 
const DECREASE = 'counter/DECREASE'

// actionFunctions
export const increase = () => ({type: INCREASE });
export const decrease = () => ({type: DECREASE });

const initialState = {
    number: 0
}

function counter( state= initialState, action ) {

    switch(action.type) {
        case INCREASE: 
            return {
                number: state.number + 1
            }
        case DECREASE: 
            return {
                number: state.number - 1
            }
        default:
            return state
    }
}

export default counter;