import './App.css';
import { TodoAppContainer } from './components/TodoAppContainer/TodoAppContainer';

const styles = {
  bg: `h-screen w-screen bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0] p-5`,
};
function App() {
  return (
    <div className={styles.bg}>
      <TodoAppContainer />
    </div>
  );
}

export default App;
