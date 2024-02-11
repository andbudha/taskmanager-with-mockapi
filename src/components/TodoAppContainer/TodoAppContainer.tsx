import { TodoAppForm } from '../TodoAppForm/TodoAppForm';
import { TodoAppList } from '../TodoAppList/TodoAppList';

const styles = {
  box: `container w-96 mx-auto bg-[#e7e5e4] p-5 m-5 rounded-md`,
};
type Props = {};

export const TodoAppContainer = (props: Props) => {
  return (
    <div className={styles.box}>
      <h2>Task Manager</h2>
      <TodoAppForm />
      <TodoAppList />
    </div>
  );
};
