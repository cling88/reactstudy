import React from 'react'
import { Link, Route, NavLink } from 'react-router-dom'
import Profile from './Profile'
function Profiles() {
    const activeStyles = {
        background: 'black',
        color: 'white'
    }
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li><NavLink activeStyle={activeStyles} to="/profiles/user1">user1</NavLink></li>
                <li><NavLink activeStyle={activeStyles} to="/profiles/user2">user2</NavLink></li>
            </ul>
            <Route path="/profiles" exact render={() => <div>사용자를 선택하세요</div>} />
            <Route path="/profiles/:username" component={Profile} />
            
        </div>
    )
}
export default Profiles
