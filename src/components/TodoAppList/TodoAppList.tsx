import { RiDeleteBin5Line } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { TaskType, tasksThunks } from '../../redux/todolistSlice';
import { ChangeEvent, useEffect } from 'react';

const styles = {
  todoList: ``,
  todo: `flex items-center justify-between h-[50px] w-[100%] bg-[#f4f4f5] my-2 p-3 rounded tracking-wide`,
  checkBoxContainer: `flex items-center`,
  checkBox: `w-[20px] h-[20px] mr-2 border-2 border-slate-400 rounded cursor-pointer`,
  doneIcon: `font-bold`,
  trashBinIcon: `h-[22px] w-[22px] cursor-pointer`,
  info: `text-center mt-4 tracking-wide`,
};

export const TodoAppList = () => {
  const todoList = useSelector<RootState, TaskType[]>(
    (state) => state.list.todolist
  );
  const dispatch = useAppDispatch();

  useEffect(() => {}, [todoList]);
  const checkBoxHandler = (
    e: ChangeEvent<HTMLInputElement>,
    taskID: number
  ) => {
    const newValue = e.currentTarget.checked;
    dispatch(tasksThunks.updateTaskStatus({ value: newValue, taskID }));
  };

  const removeTaskHandler = (taskID: number) => {
    dispatch(tasksThunks.deleteTask(taskID));
  };
  return (
    <div>
      <ul>
        {todoList.map((task) => {
          return (
            <li key={task.id} className={styles.todo}>
              <div className={styles.checkBoxContainer}>
                <input
                  className={styles.checkBox}
                  type="checkbox"
                  checked={task.isComplete}
                  onChange={(e) => checkBoxHandler(e, task.id)}
                />
                {task.title}
              </div>
              <div onClick={() => removeTaskHandler(task.id)}>
                {' '}
                <RiDeleteBin5Line className={styles.trashBinIcon} />
              </div>
            </li>
          );
        })}
      </ul>
      <div className={styles.info}>
        <h2>{`You have got ${todoList.length} tasks`}</h2>
      </div>
    </div>
  );
};
