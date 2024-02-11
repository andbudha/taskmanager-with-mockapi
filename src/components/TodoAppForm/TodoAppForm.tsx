import { GrAdd } from 'react-icons/gr';
const styles = {
  formBox: `flex justify-between items-center h-[60px]`,
  inputBox: `h-[50px] p-2 w-[290px] rounded`,
  formButton: `flex justify-center items-center	h-[50px] w-[50px] bg-[#f97316] rounded`,
};
type Props = {};
export const TodoAppForm = (props: Props) => {
  return (
    <div>
      <form className={styles.formBox} action="">
        <input
          className={styles.inputBox}
          type="text"
          placeholder="Add new task..."
        />
        <button className={styles.formButton}>
          <GrAdd />
        </button>
      </form>
    </div>
  );
};
