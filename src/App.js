
import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

// components
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import Profiles from './components/Profiles'
import HistorySample from './components/HistorySample'

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/" >HOME</Link></li>
        <li><Link to="/about?detail=true" >About</Link></li>
        <li><Link to="/profiles" >Profiles</Link></li>
        <li><Link to="/historySample">HistorySample</Link></li>
        {/* <li><Link to="/profile/user1" >user1 profile</Link></li>
        <li><Link to="/profile/user2" >user2 profile</Link></li> */}
      </ul>
      <hr/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path={['/about', '/info']} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route exact path="/historySample" component={HistorySample} />
        <Route
          render={({location}) => {
            return(
              <div>
                <h2>이 페이지는 존재하지 않습니다</h2>
                <p>{ location.pathname }</p>
              </div>
            )  
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
