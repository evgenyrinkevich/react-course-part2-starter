import { useReducer } from 'react';
import './App.css';
import tasksReducer from './state-management/reducers/tasksReducer';
import HomePage from './routing/HomePage';
import NavBar from './state-management/NavBar';
import TasksContext from './state-management/contexts/tasksContext';
import AuthProvider from './state-management/AuthProvider';

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);

  return (
    <AuthProvider>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthProvider>
  );
}

export default App;
