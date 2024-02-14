import { TodoAppForm } from '../TodoAppForm/TodoAppForm';
import { TodoAppList } from '../TodoAppList/TodoAppList';

const styles = {
  box: `container w-96 mx-auto bg-[#e7e5e4] p-5 m-5 rounded-md`,
  header: `text-center mb-4 tracking-wide text-2xl`,
};

export const TodoAppContainer = () => {
  return (
    <div className={styles.box}>
      <h2 className={styles.header}>Task Manager</h2>
      <TodoAppForm />
      <TodoAppList />
    </div>
  );
};
