import { RiDeleteBin5Line } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { TaskType } from '../../features/common/types';
import { tasksThunks } from '../../redux/todolistSlice';
import { ChangeEvent, useState } from 'react';
import BarLoader from '../Loaders/BarLoader/BarLoader';
import { styles } from '../../features/tailwindcss-styles/tailwindcss';

export const TodoAppList = () => {
  const dispatch = useAppDispatch();
  const [alteredTaskId, setAlteredTaskId] = useState<number>(0);
  const todoList = useSelector<RootState, TaskType[]>(
    (state) => state.todolist.todolist
  );
  const isLoadingAlteredTask = useSelector<RootState, boolean>(
    (state) => state.todolist.isLoadingAlteredTask
  );
  const checkBoxHandler = (
    event: ChangeEvent<HTMLInputElement>,
    taskId: number
  ) => {
    setAlteredTaskId(taskId);
    dispatch(
      tasksThunks.updateTaskStatus({
        value: event.currentTarget.checked,
        taskID: taskId,
      })
    );
  };

  const removeTaskHandler = (taskId: number) => {
    setAlteredTaskId(taskId);
    dispatch(tasksThunks.deleteTask(taskId));
  };

  return (
    <div>
      <ul className={styles.todoAppList.list}>
        {todoList.map((task) => {
          return (
            <div key={task.id}>
              {isLoadingAlteredTask && task.id === alteredTaskId ? (
                <li className={styles.todoAppList.todo}>
                  {' '}
                  <BarLoader />
                </li>
              ) : (
                <li className={styles.todoAppList.todo}>
                  <div className={styles.todoAppList.checkBoxContainer}>
                    <input
                      className={styles.todoAppList.checkBox}
                      type="checkbox"
                      checked={task.isComplete}
                      onChange={(event) => checkBoxHandler(event, task.id)}
                    />
                    {task.title}
                  </div>
                  <div onClick={() => removeTaskHandler(task.id)}>
                    {' '}
                    <RiDeleteBin5Line
                      className={styles.todoAppList.trashBinIcon}
                    />
                  </div>
                </li>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
