import React from 'react'
import { connect } from 'react-redux'
// components
import Counter from '../components/Counter'
// actions
import { increase, decrease } from '../modules/counter'

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    )
}
// const mapStateToProps = state => ({
//     number : state.counter.number
// })
// const mapDispatchToProps = dispatch => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease())
// })


export default connect(
    state => ({ number: state.counter.number }),
    {
        increase,
        decrease
    }
)(CounterContainer)
