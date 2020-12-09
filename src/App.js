import React, { useState, Suspense } from 'react'
import lodable from '@loadable/component'

const SplitMe = lodable(() => import('./SplitMe'), {
  fallback: <div>...loading</div>
})
function App() {
  const [visibile, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  }
  const onMouseOver = () => {
    SplitMe.preload();
  }
  return (
    <div>
      <h1>Splitted</h1>
      <button onClick={onClick}
        onMouseOver={onMouseOver}
      >Button!</button>
        {
          visibile &&
          <SplitMe/>
        }
    </div>
  )
}

export default App
