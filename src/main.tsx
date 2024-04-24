import React from 'react'
import ReactDOM from 'react-dom/client'
import { Calculator } from './widgets/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Calculator/>
  </React.StrictMode>,
)
