import { useEffect } from 'react';
import './App.css';
import { TodoAppContainer } from './components/TodoAppContainer/TodoAppContainer';
import { useAppDispatch } from './redux/store';
import { tasksThunks } from './redux/todolistSlice';

const styles = {
  bg: `h-screen w-screen bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0] p-5`,
};
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(tasksThunks.fetchTasks());
  }, [dispatch]);
  return (
    <div className={styles.bg}>
      <TodoAppContainer />
    </div>
  );
}

export default App;
