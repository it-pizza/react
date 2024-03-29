import React from 'react'
import ReactDOM from 'react-dom/client'

export function Title() {
  return <h1>Sign In</h1>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Title/>
  </React.StrictMode>,
)
