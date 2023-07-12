interface AddTask {
  type: 'ADD';
  task: Task;
}

interface DeleteTask {
  type: 'DELETE';
  taskId: number;
}

type TaskAction = AddTask | DeleteTask;

interface Task {
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

export default tasksReducer;
