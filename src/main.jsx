import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserProvider } from './context/Context.jsx'
import './index.sass'
import Modal from 'react-modal'

Modal.setAppElement(document.getElementById('root'))

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserProvider>
        <App />
    </UserProvider>
)
