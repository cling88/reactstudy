import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import counter, { counterSaga } from './counter'
import sample, { sampleSaga } from './sample'
import loading from './loading'

const rootReducer = combineReducers({
    counter,
    sample,
    loading
})

export function* rootSaga(){
    yield all([counterSaga(), sampleSaga()]); // all: 여러 saga 함수를 합쳐줌
}

export default rootReducer



