
import React, { useState, useCallback } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios';
import NewsPage from './pages/NewsPage'

// import NewsList from './components/NewsList'
// import Categories from './components/Categories'
// function App() {
//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback(category => {
//     setCategory(category)
//   }, [])
//   return (
//     <div className="App">
//       <Categories category={category} onSelect={onSelect}/>
//       <NewsList category={category} />
//     </div>
//   );
// }

const App = () => {
  return <Route path="/:category?" component={NewsPage}/>
}
export default App;
