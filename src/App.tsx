import { useEffect } from 'react';
import './App.css';
import { TodoAppContainer } from './components/TodoAppContainer/TodoAppContainer';
import { useAppDispatch } from './redux/store';
import { tasksThunks } from './redux/todolistSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = {
  bg: `h-screen w-screen flex justify-center items-center bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
};
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(tasksThunks.fetchTasks());
  }, [dispatch]);
  return (
    <div className={styles.bg}>
      <ToastContainer />
      <TodoAppContainer />
    </div>
  );
}

export default App;
