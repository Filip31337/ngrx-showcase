import {TodoInterface} from "./todo.interface";

export interface TodosStateInterface {
  isLoading: boolean;
  todos: TodoInterface[];
  error: string | null;
}
