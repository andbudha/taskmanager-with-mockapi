import { RiDeleteBin5Line } from 'react-icons/ri';

type Props = {};
export const TodoAppList = (props: Props) => {
  const taskList = [
    { id: 1, title: 'LearnJS' },
    { id: 2, title: 'Learn ReactJS' },
  ];
  return (
    <div>
      <ul>
        {taskList.map((task) => {
          return (
            <li key={task.id}>
              <div>{task.title}</div>
              <div>
                {' '}
                <RiDeleteBin5Line />
              </div>
            </li>
          );
        })}
      </ul>
      <div>
        <h2>{`You have got ${taskList.length} tasks`}</h2>
      </div>
    </div>
  );
};
