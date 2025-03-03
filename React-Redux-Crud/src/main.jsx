import { StrictMode } from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import UserReducer from './UserReducer'

const store = configureStore({
  reducer: {
    users: UserReducer,
  }
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
