import { GrAdd } from 'react-icons/gr';
type Props = {};
export const TodoAppForm = (props: Props) => {
  return (
    <div>
      <form action="">
        <input type="text" />
        <button>
          <GrAdd />
        </button>
      </form>
    </div>
  );
};
