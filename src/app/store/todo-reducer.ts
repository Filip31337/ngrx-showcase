import {TodosStateInterface} from "../model/todos-state.interface";
import {createReducer, on} from "@ngrx/store";
import * as Actions from './actions';

export const initialState: TodosStateInterface = {
  isLoading: false,
  todos: [],
  error: null
}

export const todoReducer = createReducer(
  initialState,
  on(Actions.getTodos, (state) => ({
    ...state,
    isLoading: true
  })),
  on(Actions.getTodosSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    todos: action.todos
  })),
  on(Actions.getTodosError, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  }))
);
