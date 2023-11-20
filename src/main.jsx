import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './global.css'
import { NotificationProvider } from './context/Notifications';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </React.StrictMode>,
)
