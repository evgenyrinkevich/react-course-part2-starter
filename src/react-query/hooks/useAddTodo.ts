import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import ApiClient from '../services/apiClient';
import { Todo } from './useTodos';
import { CACHE_KEY_TODOS } from '../constatnts';

const apiClient = new ApiClient<Todo>('/todos');

interface AddTodoContext {
  prevTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: apiClient.post,

    onMutate: (newTodo) => {
      const prevTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      onAdd();

      return { prevTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.prevTodos);
    },
  });
};

export default useAddTodo;
