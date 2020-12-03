
import React from 'react';

// components
// import Counter from './components/Counter'
import CounterContainer from './containers/CounterContainer'
import Todos from './components/Todos'


const App = () => {
  return (
    <div className="App">
      <CounterContainer />
      <hr/>
      <Todos/>
    </div>
  );
}

export default App;
