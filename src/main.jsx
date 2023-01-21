import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './contexts/useAuth'
import Tester from '../Tester'
// import './index.css'
import { SearchProvider } from './contexts/useSearch'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>
      <AuthContextProvider>
        <App />
        {/* <Tester /> */}
      </AuthContextProvider>
    </SearchProvider>
  </React.StrictMode>,
)
