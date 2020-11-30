import React from 'react'
import { withRouter } from 'react-router-dom'


const WithRouterSample = ({ location, match, history }) =>  {
    return (
        <div>
            <h4>location</h4>            
            <textarea 
                value={JSON.stringify(location, null, 2)}
                row="7"
                readOnly
                style={{width: '220px', height: '100px'}}
            ></textarea>
            <h4>match</h4>
            <textarea 
                value={JSON.stringify(match, null, 2)}
                row="7"
                readOnly
                style={{width: '220px', height: '100px'}}
            ></textarea>
            <button onClick={() => history.push('/')}>Home</button>
        </div>
    )
}

export default withRouter(WithRouterSample)