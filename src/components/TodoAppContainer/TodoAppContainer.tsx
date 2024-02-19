import { useSelector } from 'react-redux';
import { TodoAppForm } from '../TodoAppForm/TodoAppForm';
import { TodoAppList } from '../TodoAppList/TodoAppList';
import { RootState } from '../../redux/store';
import { SpinningLoader } from '../Loaders/SpinningLoader/SpinningLoader';
import { styles } from '../../features/tailwindcss-styles/tailwindcss';

export const TodoAppContainer = () => {
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.todolist.isLoading
  );
  const isLoadingAddTask = useSelector<RootState, boolean>(
    (state) => state.todolist.isLoadingAddTask
  );

  if (isLoading) {
    return (
      <div className={styles.todoAppContainer.loaderBox}>
        <SpinningLoader />
      </div>
    );
  }
  return (
    <>
      {isLoadingAddTask ? (
        <div className={styles.todoAppContainer.box}>
          <h2 className={styles.todoAppContainer.header}>Task Manager</h2>
          <TodoAppForm />
          <div className={styles.todoAppContainer.listLoaderBox}>
            <SpinningLoader />
          </div>
        </div>
      ) : (
        <div className={styles.todoAppContainer.box}>
          <h2 className={styles.todoAppContainer.header}>Task Manager</h2>
          <TodoAppForm />
          <TodoAppList />
        </div>
      )}
    </>
  );
};
