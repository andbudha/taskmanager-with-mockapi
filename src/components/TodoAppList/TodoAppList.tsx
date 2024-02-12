import { useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { MdOutlineDone } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';

const styles = {
  todoList: ``,
  todo: `flex items-center justify-between h-[50px] w-[100%] bg-[#f4f4f5] my-2 p-3 rounded tracking-wide`,
  checkBoxContainer: `flex items-center`,
  checkBox: `w-[20px] h-[20px] mr-2 border-2 border-slate-400 rounded cursor-pointer`,
  doneIcon: `font-bold`,
  trashBinIcon: `h-[22px] w-[22px] cursor-pointer`,
  info: `text-center mt-4 tracking-wide`,
};
type TodoAppList = {};
export const TodoAppList = (props: TodoAppList) => {
  const [todoList, setTodolist] = useState([
    { id: uuidv4(), title: 'LearnJS', isComplete: false },
    { id: uuidv4(), title: 'Learn ReactJS', isComplete: false },
  ]);

  const checkBoxHandler = (taskID: string) => {
    todoList.map((task) =>
      task.id === taskID ? (task.isComplete = true) : false
    );
    console.log(taskID);
  };

  return (
    <div>
      <ul>
        {todoList.map((task) => {
          return (
            <li key={task.id} className={styles.todo}>
              <div className={styles.checkBoxContainer}>
                <div
                  className={styles.checkBox}
                  onClick={() => checkBoxHandler(task.id)}
                >
                  {task.isComplete && (
                    <MdOutlineDone className={styles.doneIcon} />
                  )}
                </div>
                {task.title}
              </div>
              <div>
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
