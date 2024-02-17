import { useSelector } from 'react-redux';
import { TodoAppForm } from '../TodoAppForm/TodoAppForm';
import { TodoAppList } from '../TodoAppList/TodoAppList';
import { RootState } from '../../redux/store';
import { SpinningLoader } from '../Loaders/SpinningLoader/SpinningLoader';

const styles = {
  loaderBox: 'h-screen w-screen	flex justify-center items-center	',
  box: `container w-96 mx-auto bg-[#e7e5e4] p-5 rounded-md`,
  header: `text-center mb-4 tracking-wide text-2xl`,
};

export const TodoAppContainer = () => {
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.todolist.isLoading
  );

  if (isLoading) {
    return (
      <div className={styles.loaderBox}>
        <SpinningLoader />
      </div>
    );
  }
  return (
    <div className={styles.box}>
      <h2 className={styles.header}>Task Manager</h2>
      <TodoAppForm />
      <TodoAppList />
    </div>
  );
};
