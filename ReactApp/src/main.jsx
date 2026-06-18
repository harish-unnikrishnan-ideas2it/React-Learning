import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TaskComponent from './components/TaskComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskComponent />
  </StrictMode>,
)
