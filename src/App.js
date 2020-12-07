
import React from 'react';

// components
// import Counter from './components/Counter'
import CounterContainer from './containers/CounterContainer'
import TodoContainer from './containers/TodoContainer'

const App = () => {
  return (
    <div className="App">
      <CounterContainer />
      <hr/>
      <TodoContainer/>
    </div>
  );
}

export default App;
