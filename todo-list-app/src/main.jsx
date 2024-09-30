import { StrictMode, createContext } from 'react'
import todosStore from './todos-mobx.js';
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { todosSlice } from './todosSlice';
import App from './App.jsx'
import './index.css'

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

const TodosStoreContext = createContext(todosStore);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <TodosStoreContext.Provider value={todosStore}>
        <App />
      </TodosStoreContext.Provider>
    </Provider>
  </StrictMode>,
)
