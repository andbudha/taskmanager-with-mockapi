export type TaskType = {
  id: number;
  title: string;
  isComplete: boolean;
};
export type InitialSate = {
  todolist: TaskType[];
  inputValue: string;
};

export type UpdateTaskStatusArg = {
  value: boolean;
  taskID: number;
};
