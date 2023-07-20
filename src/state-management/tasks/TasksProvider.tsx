import { ReactNode, useReducer } from 'react';
import TasksContext from './tasksContext';

interface AddTask {
  type: 'ADD';
  task: Task;
}

interface DeleteTask {
  type: 'DELETE';
  taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

export interface Task {
  id: number;
  title: string;
}

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'ADD':
      return [action.task, ...tasks];
    case 'DELETE':
      return tasks.filter((task) => task.id !== action.taskId);
    default:
      return tasks;
  }
};

interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
