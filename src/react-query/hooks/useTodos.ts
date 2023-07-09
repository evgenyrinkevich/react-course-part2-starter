import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CACHE_KEY_TODOS } from '../constatnts';

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const fetchToDos = () =>
    axios
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.data);

  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: fetchToDos,
    staleTime: 10 * 1000, // 10s
  });
};

export default useTodos;
