import { ChangeEvent } from 'react';
import { GrAdd } from 'react-icons/gr';
import { RootState, useAppDispatch } from '../../redux/store';
import { tasksThunks, todolistActions } from '../../redux/todolistSlice';
import { useSelector } from 'react-redux';
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

  const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      todolistActions.updateInputValue({ value: e.currentTarget.value })
    );
  };

  const addTaskHandler = () => {
    const newTask = {
      id: 0,
      title: inputValue,
      isComplete: false,
    };
    if (inputValue) {
      dispatch(tasksThunks.addTask(newTask));
    }

    dispatch(todolistActions.updateInputValue({ value: '' }));
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
        />
        <button className={styles.formButton} onClick={addTaskHandler}>
          <GrAdd />
        </button>
      </div>
    </div>
  );
};
