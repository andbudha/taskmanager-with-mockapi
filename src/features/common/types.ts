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
  error: boolean;
  errorMessage: string;
};

export type UpdateTaskStatusArg = {
  value: boolean;
  taskID: number;
};
