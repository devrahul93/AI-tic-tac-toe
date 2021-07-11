import React from 'react'
import Tilty from 'react-tilty'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Tilty
        className='Tilt'
        options={{ max: 25 }}
        style={{ height: 250, width: 250 }}
        speed={400}
        glare={true}
        max-glare={1}
      >
        <div className='container'>
          <div className='card'>
            <h1>Hello World</h1>
          </div>
        </div>
      </Tilty>
    </div>
  )
}

export default App
