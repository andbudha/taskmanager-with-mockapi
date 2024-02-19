import { ChangeEvent, KeyboardEvent } from 'react';
import { GrAdd } from 'react-icons/gr';
import { RootState, useAppDispatch } from '../../redux/store';
import { tasksThunks, todolistActions } from '../../redux/todolistSlice';
import { useSelector } from 'react-redux';
import { errorToast } from '../../features/utils/errorToast';
import { TaskType } from '../../features/common/types';
import { styles } from '../../features/tailwindcss-styles/tailwindcss';

export const TodoAppForm = () => {
  const dispatch = useAppDispatch();
  const inputValue = useSelector<RootState, string>(
    (state) => state.todolist.inputValue
  );

  const newTask: TaskType = {
    id: 0,
    title: inputValue,
    isComplete: false,
  };

  const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      todolistActions.updateInputValue({ value: e.currentTarget.value })
    );
  };

  const onClickAddTaskHandler = () => {
    if (inputValue) {
      dispatch(tasksThunks.addTask(newTask));
    } else {
      errorToast('Type in a task, please!');
    }
    dispatch(todolistActions.updateInputValue({ value: '' }));
  };

  const onEnterAddTaskHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue) {
      dispatch(tasksThunks.addTask(newTask));
      dispatch(todolistActions.updateInputValue({ value: '' }));
    } else if (event.key === 'Enter' && !inputValue) {
      errorToast('Type in a task, please!');
    }
  };
  return (
    <div>
      <div className={styles.todoAppForm.formBox}>
        <input
          value={inputValue}
          className={styles.todoAppForm.inputBox}
          type="text"
          placeholder="Add new task..."
          onChange={inputValueHandler}
          onKeyDown={onEnterAddTaskHandler}
        />
        <button
          className={styles.todoAppForm.formButton}
          onClick={onClickAddTaskHandler}
        >
          <GrAdd className={styles.todoAppForm.icon} />
        </button>
      </div>
    </div>
  );
};
