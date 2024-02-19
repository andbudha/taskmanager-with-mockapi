import { useEffect } from 'react';
import './App.css';
import { TodoAppContainer } from './components/TodoAppContainer/TodoAppContainer';
import { useAppDispatch } from './redux/store';
import { tasksThunks } from './redux/todolistSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { styles } from './features/tailwindcss-styles/tailwindcss';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(tasksThunks.fetchTasks());
  }, [dispatch]);
  return (
    <div className={styles.app.bg}>
      <ToastContainer />
      <TodoAppContainer />
    </div>
  );
}

export default App;
