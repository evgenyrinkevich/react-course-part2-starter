import './App.css';
import HomePage from './routing/HomePage';
import NavBar from './state-management/NavBar';
import AuthProvider from './state-management/AuthProvider';
import { TasksProvider } from './state-management/tasks';

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <NavBar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
