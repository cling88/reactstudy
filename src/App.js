
import { useState,useRef, useCallback } from 'react';

import TodoTemplate from './components/TodoTemplate';
// components
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Study basic react',
      checked: true
    },
    {
      id: 2,
      text: 'Styling components',
      checked: true
    },
    {
      id: 3,
      text: 'Build Todo application',
      checked: false
    }
  ])

  const nextId = useRef(4);

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    }
    setTodos(todos.concat(todo));
    nextId.current += 1;
  }, [todos])

  const onRemove = useCallback(id => {
    todos.filter(todo => {
      setTodos(todos.filter(todo => todo.id !== id))
    })
  }, [todos])

  const onToggle = useCallback(id => {
    setTodos(
      todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo)
    )
  })

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
}

export default App;
