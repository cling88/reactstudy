import React, { useContext } from 'react'
// import { ColorConsumer } from '../contexts/color'
import ColorContext from '../contexts/color'

function ColorBox() {
    const { state } = useContext(ColorContext)
    return (
        
        <>
            <div
                style={{
                    width: '60px',
                    height: '60px',
                    background: state.color
                }}
            >
            </div>
            <div
                style={{
                    width: '30px',
                    height: '30px',
                    background: state.subColor
                }}
            >
            </div>
        </> 
    )
}
export default ColorBox
