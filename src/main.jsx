import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import { CharacterDetailsProvider} from './context/CharacterDetails'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CharacterDetailsProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CharacterDetailsProvider>
)
