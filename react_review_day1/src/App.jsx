import './App.css'
import { Button } from 'antd'
import { useState } from 'react'
import 'antd/dist/reset.css'

function App() {

  const [count, setCount] = useState(0)
  return (
    <>
        <div>
          <h1>Day-1 react状态</h1>
          <p>{count}</p>
          <button 
            type='primary'
            onClick={() => setCount(count + 1)}
          >
            点击此按钮加1
          </button>
        </div>
    </>
  )
}

export default App
