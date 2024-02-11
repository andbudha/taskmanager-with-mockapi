import { useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';

const styles = {
  todoList: ``,
  todo: `flex items-center justify-between h-[50px] w-[100%] bg-[#f4f4f5] my-2 p-3 rounded`,
  checkBox: ``,
  icon: `h-[20px] w-[20px] cursor-pointer`,
};
type Props = {};
export const TodoAppList = (props: Props) => {
  const [todoList, setTodolist] = useState([
    { id: 1, title: 'LearnJS' },
    { id: 2, title: 'Learn ReactJS' },
  ]);

  return (
    <div>
      <ul>
        {todoList.map((task) => {
          return (
            <li key={task.id} className={styles.todo}>
              <div>
                <div></div>
                {task.title}
              </div>
              <div>
                {' '}
                <RiDeleteBin5Line className={styles.icon} />
              </div>
            </li>
          );
        })}
      </ul>
      <div>
        <h2>{`You have got ${todoList.length} tasks`}</h2>
      </div>
    </div>
  );
};
