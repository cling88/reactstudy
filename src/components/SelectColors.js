import React, { Component } from 'react'
import ColorContext from '../contexts/color'

const colors = ['red','orange','yellow','green','blue','indigo','violet']

class SelectColors extends Component {
    static contextType = ColorContext;
    
    handleSetColor = color => {
        this.context.actions.setColor(color);
    }

    handleSetSubColor = color => {
        this.context.actions.setSubColor(color);
    }

    render(){
        console.log(">> contextType", this.context)
        return (
            <div>
                <h2>색상을 선택하세요</h2>
                <div style={{display: 'flex'}}>
                    {
                        colors.map(color => (
                            <div
                                key={color}
                                style={{
                                    background: color,
                                    width: '24px',
                                    height: '24px',
                                    cursor: 'pointer'
                                }}
                                onClick={() => {this.handleSetColor(color)}}
                                onContextMenu={() => {this.handleSetSubColor(color)}}
                            >
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default SelectColors






// import React from 'react'
// import { ColorConsumer } from '../contexts/color'

// const colors = ['red','orange','yellow','green','blue','indigo','violet']

// const SelectColors = () => {
//     return (
//         <div>
//             <h2>색상을 선택하세요</h2>
//             <ColorConsumer>
//                 {
//                     ({actions}) => (
//                         <div style={{display: 'flex'}}>
//                             {
//                                 colors.map(color => (
//                                     <div
//                                         key={color}
//                                         style={{
//                                             background: color,
//                                             width: '24px',
//                                             height: '24px',
//                                             cursor: 'pointer'
//                                         }}
//                                         onClick={() => actions.setColor(color)}
//                                         onContextMenu={
//                                             e => {
//                                                 e.preventDefault();
//                                                 actions.setSubColor(color)
//                                             }
//                                         }
//                                     >
//                                     </div>
//                                 ))
//                             }
//                         </div>
//                     )
//                 }
//             </ColorConsumer>
//         </div>
//     )
// }

// export default SelectColors
