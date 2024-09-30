import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';
import { todosSlice } from './todosSlice';
import App from './App.jsx'
import './index.css'

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Provider>
  </StrictMode>,
)
