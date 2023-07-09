import { useQuery } from '@tanstack/react-query';
import ApiClient from '../services/apiClient';
import { CACHE_KEY_TODOS } from '../constatnts';

const apiClient = new ApiClient<Todo>('/todos');

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000, // 10s
  });
};

export default useTodos;
