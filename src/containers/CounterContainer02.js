import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { connect } from 'react-redux'
// components
import Counter from '../components/Counter'
// actions
import { increase, decrease } from '../modules/counter'

const CounterContainer02 = () => {  /* { number, increase, decrease } */
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    return (
        <Counter 
            number={number} 
            onIncrease={useCallback(() => dispatch(increase()), [dispatch])} 
            onDecrease={useCallback(() => dispatch(decrease()), [dispatch])} 
        />
    )
}
export default CounterContainer02;
