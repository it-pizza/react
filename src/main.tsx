import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css" 

export function Title() {
  return <h1>Sign In</h1>
}

export function Burger() {
  return (
    <nav className="menu">
      <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
      <label htmlFor="burger-checkbox" className="burger">
        <span className='burger-span'></span>
      </label>
    </nav>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Title/>
    <Burger/>
  </React.StrictMode>,
)
