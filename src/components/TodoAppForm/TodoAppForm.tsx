import { ChangeEvent, KeyboardEvent } from 'react';
import { GrAdd } from 'react-icons/gr';
import { RootState, useAppDispatch } from '../../redux/store';
import { tasksThunks, todolistActions } from '../../redux/todolistSlice';
import { useSelector } from 'react-redux';
import { errorToast } from '../../features/utils/errorToast';
import { TaskType } from '../../features/common/types';
const styles = {
  formBox: `flex justify-between items-center h-[60px] `,
  inputBox: `h-[50px] p-2 w-[290px] rounded tracking-wider border border-[#f97316] outline-[#f97316] `,
  formButton: `flex justify-center items-center	h-[50px] w-[50px] bg-[#f97316] rounded ml-2`,
};
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
      <div className={styles.formBox}>
        <input
          value={inputValue}
          className={styles.inputBox}
          type="text"
          placeholder="Add new task..."
          onChange={inputValueHandler}
          onKeyDown={onEnterAddTaskHandler}
        />
        <button className={styles.formButton} onClick={onClickAddTaskHandler}>
          <GrAdd />
        </button>
      </div>
    </div>
  );
};
