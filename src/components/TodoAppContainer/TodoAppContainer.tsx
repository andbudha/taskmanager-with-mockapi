import { TodoAppForm } from '../TodoAppForm/TodoAppForm';
import { TodoAppList } from '../TodoAppList/TodoAppList';
const styles = { bg: `` };
type Props = {};

export const TodoAppContainer = (props: Props) => {
  return (
    <div className={styles.bg}>
      <h2>Task Manager</h2>
      <TodoAppForm />
      <TodoAppList />
    </div>
  );
};
