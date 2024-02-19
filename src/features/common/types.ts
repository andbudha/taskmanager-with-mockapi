export type TaskType = {
  id: number;
  title: string;
  isComplete: boolean;
};
export type InitialSate = {
  todolist: TaskType[];
  inputValue: string;
  isLoading: boolean;
  isLoadingAddTask: boolean;
  isLoadingAlteredTask: boolean;
};

export type UpdateTaskStatusArg = {
  value: boolean;
  taskID: number;
};
